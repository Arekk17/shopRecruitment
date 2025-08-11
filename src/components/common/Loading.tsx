import type { HTMLAttributes } from "react";
import Spinner from "./Spinner";

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  size?: number;
  centered?: boolean;
}

export default function Loading({
  label = "Loading...",
  size = 28,
  centered = false,
  className,
  ...divProps
}: LoadingProps) {
  const containerClasses = [
    "flex items-center gap-3 text-gray-500",
    centered ? "justify-center" : "",
    className ?? "",
  ].join(" ");

  return (
    <div
      className={containerClasses}
      role="status"
      aria-live="polite"
      {...divProps}
    >
      <Spinner size={size} />
      <span>{label}</span>
    </div>
  );
}
