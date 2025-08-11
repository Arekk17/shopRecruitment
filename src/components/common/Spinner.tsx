import type { CSSProperties } from "react";

interface SpinnerProps {
  size?: number;
  colorClassName?: string;
  className?: string;
}

export default function Spinner({
  size = 28,
  colorClassName = "border-t-brand-600",
  className,
}: SpinnerProps) {
  const style: CSSProperties = {
    width: size,
    height: size,
    borderWidth: Math.max(2, Math.round(size / 8)),
  };

  return (
    <span
      className={[
        "inline-block rounded-full animate-spin",
        "border border-gray-300",
        colorClassName,
        className ?? "",
      ].join(" ")}
      style={style}
      aria-hidden="true"
    />
  );
}
