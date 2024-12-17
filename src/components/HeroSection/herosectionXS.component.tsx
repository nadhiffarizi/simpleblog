import * as React from "react";
import getMaxChar from "../../../utils/getMaxChar";
import IPagePosts from "@/app/Interface/PagePosts.interface";
import { IContentfulAsset } from "../../../contentful/contentfulTypes/TypeSimpleBlog";
import Link from "next/link";

export default function HeroSectionXS({ post }: { post: IPagePosts }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full h-full ">
      {" "}
      {/**width div 11/12  */}
      <div className="flex justify-center items-center w-full ">
        {" "}
        {/**Image container*/}
        <img
          src={`https:${
            (
              post.featuredPost?.fields
                .headlineImage as unknown as IContentfulAsset
            )?.fields.file.url
          }`}
          alt="heroimage"
          className="w-full object-cover"
        />
      </div>
      <div className="w-full h-1/5 ">
        <p className="w-11/12 text-base text-center text-[#222536] font-thin">
          {post.featuredPost?.fields.author}{" "}
        </p>
      </div>
      <div className="w-full h-1/5 ">
        {" "}
        {/**Title div */}
        <p className="w-11/12 text-wrap text-2xl font-bold text-center">
          <Link href={"/Blogs/Article/" + post.featuredPost?.fields.slug}>
            {getMaxChar(post.featuredPost?.fields.title, 90)}
          </Link>
        </p>
        <div className="w-full h-1/5 mt-5">
          {" "}
          {/**description div */}
          <p className="w-11/12 text-center text-[#222536] font-semibold text-base">
            <Link href={"/Categories/" + post.featuredPost?.fields.category}>
              {post.featuredPost?.fields.category}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
