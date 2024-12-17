import * as React from "react";
import IPagePosts from "@/app/Interface/PagePosts.interface";
import getMaxChar from "../../../utils/getMaxChar";
import Link from "next/link";
import { IContentfulAsset } from "../../../contentful/contentfulTypes/TypeSimpleBlog";

export default function HeroSectionMD({ post }: { post: IPagePosts }) {
  return (
    <div className="w-full h-full bg-[#F4F0F8]">
      {" "}
      {/**Div full width full length */}
      <div className="w-11/12 h-full grid grid-cols-2 ">
        {" "}
        {/** grid 2 cols*/}
        <div className="flex flex-col justify-center items-start w-full h-full ">
          {" "}
          {/**Col 1 */}
          <div className="flex flex-col items-start justify-start gap-5 w-11/12 xl:h-2/3 md:h-1/2 ">
            {" "}
            {/**Central div headline*/}
            <h3 className="text-[#222536] font-normal xl:text-lg md:text-base">
              Featured Post {">"} {post.featuredPost?.fields.category}
            </h3>
            <h1 className="text-start xl:text-3xl md:text-xl font-bold">
              {getMaxChar(post.featuredPost?.fields.title, 90)}
            </h1>
            <p className="xl:text-lg md:text-base">
              By {post.featuredPost?.fields.author}
            </p>
            <p className="text-start xl:text-lg md:text-sm text-wrap">
              {" "}
              {/**description */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              magnam facere, eveniet
            </p>
            <button className="xl:w-[200px] md:w-[150px] h-[50px] border-transparent rounded-sm bg-yellow-400">
              <Link href={"/Blogs/Article/" + post.featuredPost?.fields.slug}>
                Read More
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full ">
          {" "}
          {/**Col 2 */}
          <div className="flex flex-col items-start justify-start gap-5 w-11/12 xl:h-2/3 md:h-1/2 ">
            {/**Div center image */}
            <img
              src={`https:${
                (
                  post.featuredPost?.fields
                    .headlineImage as unknown as IContentfulAsset
                )?.fields.file.url
              }`}
              alt="imageheadline"
              className="md:w-4/5 h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
