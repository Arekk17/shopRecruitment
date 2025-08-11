import type { PropsWithChildren } from "react";

export default function ContentContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-row justify-center items-start px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 py-5 w-full">
      <div className="w-full max-w-[1280px] flex justify-center">
        <div className="w-full max-w-[960px] px-2 sm:px-4">{children}</div>
      </div>
    </div>
  );
}
