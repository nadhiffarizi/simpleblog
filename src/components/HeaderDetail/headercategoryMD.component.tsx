"use client";
import * as React from "react";

export default function HeaderCategoryMD({
  typeHeader,
}: {
  typeHeader: string;
}) {
  return (
    <div className="flex items-center justify-center w-full h-[200px] bg-[#F4F0F8]">
      <div className="w-5/6 h-2/3 ">
        <div className="w-full h-full grid grid-rows-4 ">
          {" "}
          {/**grid div */}
          <div className="row-span-2 ">
            {/**row 1 */}
            <div className="flex justify-center items-center w-full h-full">
              <h1 className="text-4xl text-[#222536] font-bold text-center">
                {typeHeader}
              </h1>
            </div>
          </div>
          <div className="row-span-2 ">
            {/**row 3 */}

            <p className="text-base font-semibold text-[#222536]">
              {typeHeader}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
