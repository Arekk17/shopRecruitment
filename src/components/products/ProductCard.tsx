import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const image =
    product.thumbnail ||
    product.images?.[0] ||
    "https://via.placeholder.com/176x176?text=No+Image";
  return (
    <div className="flex flex-col gap-2 sm:gap-3 w-full">
      <div className="flex flex-col gap-2 sm:gap-3 w-full">
        <img
          src={image}
          alt={product.title}
          className="w-full aspect-square object-cover rounded-lg sm:rounded-xl bg-gray-200"
          loading="lazy"
        />
        <div className="flex flex-col">
          <div className="text-ink text-sm sm:text-base leading-5 sm:leading-6 font-medium truncate">
            {product.title}
          </div>
          <div className="text-sm leading-[21px] text-brand-600">
            ${product.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
