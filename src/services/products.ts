import { apiClient } from "./api";
import type { Product, ProductListResponse } from "../types/product";
import type {
  FetchProductsParams,
  SearchProductsParams,
} from "../types/product-queries";
import { isAxiosError } from "axios";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { productKeys } from "../constants/queryKeys";

export async function fetchProducts(
  params: FetchProductsParams = {},
  signal?: AbortSignal
): Promise<ProductListResponse> {
  const { select, ...rest } = params ?? {};
  const finalParams =
    select && Array.isArray(select)
      ? { ...rest, select: select.join(",") }
      : rest;

  const response = await apiClient.get<ProductListResponse>("/products", {
    params: finalParams,
    signal,
  });
  return response.data;
}

export async function fetchProduct(
  id: number,
  signal?: AbortSignal
): Promise<Product> {
  const response = await apiClient.get<Product>(`/products/${id}`, {
    signal,
  });
  return response.data;
}

export async function searchProducts(
  params: SearchProductsParams,
  signal?: AbortSignal
): Promise<ProductListResponse> {
  const { select, ...rest } = params ?? ({} as SearchProductsParams);
  const finalParams =
    select && Array.isArray(select)
      ? { ...rest, select: select.join(",") }
      : rest;

  const response = await apiClient.get<ProductListResponse>(
    "/products/search",
    { params: finalParams, signal }
  );
  return response.data;
}

export async function fetchFeaturedProducts(
  params: Omit<FetchProductsParams, "sortBy" | "order"> = {},
  signal?: AbortSignal
): Promise<ProductListResponse> {
  return fetchProducts({ ...params, sortBy: "rating", order: "desc" }, signal);
}

export async function fetchNewArrivalsProducts(
  params: Omit<FetchProductsParams, "sortBy" | "order"> = {},
  signal?: AbortSignal
): Promise<ProductListResponse> {
  try {
    return await fetchProducts(
      { ...params, sortBy: "meta.createdAt", order: "desc" },
      signal
    );
  } catch (error) {
    if (
      isAxiosError(error) &&
      error.response &&
      (error.response.status === 400 || error.response.status === 422)
    ) {
      return fetchProducts({ ...params, sortBy: "id", order: "desc" }, signal);
    }
    throw error;
  }
}

export function useProductsQuery(params: FetchProductsParams = {}) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: ({ signal }) => fetchProducts(params, signal),
    placeholderData: keepPreviousData,
  });
}

export function useProductQuery(id: number, enabled: boolean = true) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: ({ signal }) => fetchProduct(id, signal),
    enabled: Boolean(id) && enabled,
  });
}

export function useProductsSearchQuery(
  q: string,
  params: Omit<SearchProductsParams, "q"> = {}
) {
  const enabled = Boolean(q && q.trim().length > 0);
  return useQuery({
    queryKey: productKeys.search(q, params),
    queryFn: ({ signal }) => searchProducts({ q, ...params }, signal),
    enabled,
    placeholderData: keepPreviousData,
  });
}

export function useFeaturedProductsQuery(
  params: Omit<FetchProductsParams, "sortBy" | "order"> = {}
) {
  return useQuery({
    queryKey: productKeys.featured(params),
    queryFn: ({ signal }) => fetchFeaturedProducts(params, signal),
    placeholderData: keepPreviousData,
  });
}

export function useNewArrivalsProductsQuery(
  params: Omit<FetchProductsParams, "sortBy" | "order"> = {}
) {
  return useQuery({
    queryKey: productKeys.newArrivals(params),
    queryFn: ({ signal }) => fetchNewArrivalsProducts(params, signal),
    placeholderData: keepPreviousData,
  });
}
