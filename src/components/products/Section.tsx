import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";
import EmptyState from "../common/EmptyState";
import { EmptyIcon } from "../../assets/icons";
import type { ProductListResponse } from "../../types/product";

interface SectionProps {
  title: string;
  data?: ProductListResponse;
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
}

export default function Section({
  title,
  data,
  isLoading,
  isError,
  onRetry,
}: SectionProps) {
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
            retry={onRetry}
          />
        )}
        {!isLoading && !isError && !hasProducts && (
          <EmptyState
            title="No products available"
            message="There are no products in this category at the moment."
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
