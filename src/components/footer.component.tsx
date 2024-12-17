import * as React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full lg:h-64 xs:h-[200px] bg-[#222536]">
      {/**Full width Footer */}
      <div className="flex flex-col md:w-11/12 xs:w-full h-4/5 ">
        {" "}
        {/**11/12 Div navbar for aligning */}
        <div className="flex flex-row justify-center gap-3 font-semibold text-white w-full h-1/6 ">
          {" "}
          {/**Div for menubar footer */}
          <Link href={"/"}>Home</Link>
          <Link href={"/About"}>About</Link>
          <Link href={"/Blogs"}>Blog</Link>
          <Link href={"/Categories"}>Categories</Link>
        </div>
        <div className="flex items-center justify-center w-full h-4/6 ">
          {" "}
          {/**Footer logo div */}
          <img src="/FooterAssets/Logo.png" alt="FooterLogo" />
        </div>
        <div className="w-full h-1/6">
          <center className="text-sm text-white font-semibold">
            Copyright Finsweet &copy; 2024
          </center>
        </div>
      </div>
    </div>
  );
}
