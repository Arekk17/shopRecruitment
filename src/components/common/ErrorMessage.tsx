import type { HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  retry?: () => void;
}

export default function ErrorMessage({
  title = "Something went wrong",
  message = "An error occurred while loading data.",
  retry,
  className,
  ...divProps
}: ErrorMessageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center ${className ?? ""}`}
      role="alert"
      {...divProps}
    >
      <div className="text-red-600 text-lg font-semibold mb-2">{title}</div>
      <div className="text-gray-600 mb-4">{message}</div>
      {retry && (
        <button
          type="button"
          onClick={retry}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try again
        </button>
      )}
    </div>
  );
}
