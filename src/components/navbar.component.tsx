"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="block w-full lg:h-24 xs:h-20 bg-[#222536]">
        {/**Full width navbar */}
        <div className="flex flex-row md:w-11/12 xs:w-full h-full ">
          {" "}
          {/**11/12 Div navbar for aligning */}
          <div className="flex items-center justify-start lg:w-2/6 md:w-1/4 xs:w-1/2 xs:ms-5 h-full ">
            {/**Logo div */}
            <div className="block">
              <Link href={"/"}>
                <img
                  src="/NavbarAssets/Logo.png"
                  className="w-[140px] h-[28px]"
                  alt="brandlogo"
                />
              </Link>
            </div>
          </div>
          <div className="md:hidden xs:flex justify-end items-center xs:w-1/2 h-full ">
            {" "}
            {/**Burger bar menu */}
            <div className="w-1/2 h-1/2 ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center w-12 px-3 py-2 border-2 border-white rounded-lg text-teal-200 hover:text-white hover:border-white"
              >
                {isOpen ? (
                  <XMarkIcon
                    className="bg-transparent fill-white"
                    aria-hidden="true"
                  ></XMarkIcon>
                ) : (
                  <Bars3Icon
                    className=" bg-transparent fill-white"
                    aria-hidden="true"
                  ></Bars3Icon>
                )}
              </button>
            </div>
          </div>
          <div className="md:flex xs:hidden flex-col justify-center items-center lg:w-2/6 md:w-2/4 h-full">
            {" "}
            {/**Searchbar div */}
            <div className="flex flex-row justify-center items-center w-full h-3/5">
              <label htmlFor="searchbar" className="w-1/3">
                {" "}
                <p className="w-full text-center md:font-thin md:text-lg md:text-white">
                  {" "}
                  Search
                </p>
              </label>
              <input
                type="text"
                name=""
                id="searchbar"
                className="w-full h-2/3 border-1 rounded-xl lg:ms-2 md:ms-1 md:me-3"
              />
            </div>
          </div>
          <div className="md:block xs:hidden lg:w-2/6 md:w-1/4 xs:5/6 h-full ">
            {/**Menubar div*/}
            <ul className="w-full h-full flex lg:justify-evenly md:justify-end md:gap-2 items-center">
              <li className="lg:inline md:hidden lg:font-thin lg:text-lg  text-white ">
                <Link href={"/"}></Link> Home
              </li>
              <li className="lg:font-thin lg:text-lg text-white">
                {" "}
                <Link href={"/About"}> About</Link>
              </li>
              <li className="lg:font-thin lg:text-lg  text-white">
                <Link href={"/Blogs"}>Blog</Link>
              </li>
              <li className="lg:font-thin lg:text-lg text-white">
                <Link href={"/Categories"}>Categories</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {" "}
        {/**Triggered if isOpen == True */}
        {isOpen ? (
          <div className="md:hidden xs:block w-full xs:h-[200px]  bg-[#222536]">
            <div className="block w-3/4 h-full ">
              <div className="flex flex-col flex-grow items-center gap-3 text-base font-semibold lg:flex-grow">
                <div className="w-5/6 h-[0.09rem] bg-slate-50" />

                <Link
                  href={"/"}
                  className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  {" "}
                  Home{" "}
                </Link>

                <Link
                  href={"/About"}
                  className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  {" "}
                  About{" "}
                </Link>

                <Link
                  href={"/Blogs"}
                  className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  {" "}
                  Blog{" "}
                </Link>

                <Link
                  href={"/Categories"}
                  className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  {" "}
                  Categories{" "}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="md:hidden xs:hidden justify-center items-center xs:w-full h-[70px] ">
        {" "}
        {/**Search bar*/}
        <div className="flex flex-row justify-center items-center w-4/5 h-3/5">
          <label htmlFor="searchbar" className="w-1/5 xs:me-3">
            {" "}
            <p className="w-full text-end xs:font-semibold xs:text-sm xs:text-black">
              {" "}
              Search
            </p>
          </label>
          <input
            type="text"
            name=""
            id="searchbar"
            className="w-full h-4/5 border-2 border-[#222536] rounded-xl lg:ms-2 md:ms-1 md:me-3 "
          />
        </div>
      </div>
    </>
  );
}
