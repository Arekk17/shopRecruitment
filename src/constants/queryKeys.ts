import type {
  FetchProductsParams,
  SearchProductsParams,
} from "../types/product-queries";

export const productKeys = {
  all: ["products"] as const,
  list: (params: FetchProductsParams = {}) =>
    ["products", "list", params] as const,
  detail: (id: number) => ["products", "detail", id] as const,
  search: (q: string, params: Omit<SearchProductsParams, "q"> = {}) =>
    ["products", "search", { q, ...params }] as const,
  featured: (params: FetchProductsParams = {}) =>
    ["products", "featured", params] as const,
  newArrivals: (params: FetchProductsParams = {}) =>
    ["products", "newArrivals", params] as const,
} as const;
