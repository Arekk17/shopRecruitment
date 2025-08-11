import SearchInput from "./SearchInput";
import { LogoIcon } from "../assets/icons";

interface HeaderProps {
  onSearch?: (q: string) => void;
  value?: string;
}

export default function Header({ onSearch, value }: HeaderProps) {
  return (
    <header className="box-border flex items-center justify-between px-10 py-3 h-[97px] border-b border-line w-full bg-white">
      <div className="flex items-center gap-4 w-[136px] h-[23px]">
        <LogoIcon className="text-ink w-4 h-4" />
        <div className="font-bold text-[18px] leading-[23px] text-ink">
          ShopOnline
        </div>
      </div>

      <SearchInput
        className=""
        value={value}
        onChange={onSearch}
        onSubmit={onSearch}
      />
    </header>
  );
}
