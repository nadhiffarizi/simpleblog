"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import IPagePosts from "@/app/Interface/PagePosts.interface";

export default function HeaderCategoryXS({
  typeHeader,
}: {
  typeHeader: string;
}) {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center w-full h-[200px] bg-[#F4F0F8]">
      <div className="w-5/6 h-2/3 ">
        <div className="w-full h-full grid grid-rows-4 ">
          {" "}
          {/**grid div */}
          <div className="row-span-2 ">
            {/**row 1 */}
            <div className="flex justify-center items-center w-full h-full">
              <h1 className="text-3xl text-[#222536] text-center">
                {typeHeader}
              </h1>
            </div>
          </div>
          <div className="row-span-2 ">
            {/**row 3 */}
            <p className="text-sm font-thin text-[#222536]">{typeHeader}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
