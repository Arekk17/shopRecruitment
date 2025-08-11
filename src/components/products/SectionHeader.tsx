interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-start px-2 sm:px-4 pt-3 sm:pt-5 pb-2 sm:pb-3 w-full">
      <h2 className="font-bold text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 md:leading-[28px] text-ink">
        {title}
      </h2>
    </div>
  );
}
