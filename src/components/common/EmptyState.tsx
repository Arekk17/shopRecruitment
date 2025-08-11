import type { HTMLAttributes } from "react";

interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = "No products found",
  message = "Try adjusting your search criteria or browse our featured products.",
  icon,
  actionLabel,
  onAction,
  className,
  ...divProps
}: EmptyStateProps) {
  return (
    <div
      className={`w-full bg-white rounded-lg sm:rounded-xl border border-dashed border-line p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 ${className ?? ""}`}
      {...divProps}
    >
      {icon && (
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-50 flex items-center justify-center">
          <div className="text-brand-600">{icon}</div>
        </div>
      )}
      <div className="text-ink text-lg sm:text-xl font-semibold">{title}</div>
      <div className="text-gray-600 max-w-md text-sm sm:text-base">
        {message}
      </div>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-2 inline-flex items-center px-3 sm:px-4 py-2 rounded-lg bg-brand-600 text-white hover:opacity-90 transition text-sm sm:text-base"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
