import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";
import EmptyState from "../common/EmptyState";
import { EmptyIcon } from "../../assets/icons";
import {
  useProductsQuery,
  useProductsSearchQuery,
} from "../../services/products";

interface ProductListProps {
  title: string;
  q?: string;
}

export default function ProductList({ title, q }: ProductListProps) {
  const params = { limit: 20, skip: 0 };
  const isSearching = q && q.trim().length > 0;

  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
    refetch: searchRefetch,
  } = useProductsSearchQuery(q || "", params);

  const {
    data: listData,
    isLoading: listLoading,
    isError: listError,
    refetch: listRefetch,
  } = useProductsQuery(params);

  const data = isSearching ? searchData : listData;
  const isLoading = isSearching ? searchLoading : listLoading;
  const isError = isSearching ? searchError : listError;
  const refetch = isSearching ? searchRefetch : listRefetch;

  const hasProducts = data?.products && data.products.length > 0;

  return (
    <div className="w-full max-w-[960px]">
      <SectionHeader title={title} />
      <div className="flex flex-col items-start p-2 sm:p-4 gap-3 w-full min-h-[120px]">
        {isLoading && <Loading />}
        {isError && (
          <ErrorMessage
            title="Failed to load products"
            message="We couldn't load the products. Please try again."
            retry={() => refetch()}
          />
        )}
        {!isLoading && !isError && !hasProducts && (
          <EmptyState
            title={isSearching ? "No products found" : "No products available"}
            message={
              isSearching
                ? `No products found for "${q}". Try different keywords or browse our featured products.`
                : "There are no products available at the moment."
            }
            icon={<EmptyIcon className="text-gray-400" />}
          />
        )}
        {hasProducts && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 w-full">
            {data.products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
