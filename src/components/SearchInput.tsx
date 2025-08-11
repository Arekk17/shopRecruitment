import { useState, useEffect } from "react";
import { SearchIcon } from "../assets/icons";

export interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Search for products",
  className,
}: SearchInputProps) {
  const [internal, setInternal] = useState<string>(value ?? "");

  useEffect(() => {
    setInternal(value ?? "");
  }, [value]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.value;
    setInternal(next);
    onChange?.(next);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit?.(internal);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "flex items-stretch h-12 w-[248px] p-3 pt-0 pb-0 " + (className ?? "")
      }
      role="search"
    >
      <div className="flex items-center justify-center w-10 h-12 bg-brand-50 rounded-l-xl pl-4">
        <SearchIcon className="text-brand-600 w-6 h-6" />
      </div>
      <div className="flex-1 flex items-center bg-brand-50 rounded-r-xl px-4">
        <input
          type="text"
          value={internal}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-brand-600 placeholder:text-brand-600 text-base"
          aria-label="Search field"
        />
      </div>
    </form>
  );
}
