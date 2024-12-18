import { Entry } from "contentful";
import * as React from "react";
import { TypeSimpleBlog } from "../../../contentful/contentfulTypes";
import { IContentfulAsset } from "../../../contentful/contentfulTypes/TypeSimpleBlog";
import Link from "next/link";
import getMaxChar from "../../../utils/getMaxChar";
import { TypeCategorySimpleBlog } from "../../../contentful/contentfulTypes";

interface IContentCard {
  post?: Entry<TypeSimpleBlog, undefined, string>;
  category?: Entry<TypeCategorySimpleBlog, undefined, string>;
}

export default function CardContentMD({ post, category }: IContentCard) {
  return (
    <div className="flex w-full mt-5 md:pb-5 border-b-2 ">
      <div className="grid grid-cols-3 w-full h-full ">
        <div className="col-span-1 w-full h-full ">
          <div className="flex w-full h-full justify-start ">
            {" "}
            {/**Image div */}
            {post !== undefined ? (
              <img
                src={`https:${
                  (post.fields?.headlineImage as unknown as IContentfulAsset)
                    ?.fields.file.url
                }`}
                alt="blogphoto"
                className="xl:w-3/5 md:w-full  xl:h-full md:h-full object-cover
                          "
              />
            ) : (
              <img
                src={`https:${
                  (
                    category?.fields
                      .headlineCategory as unknown as IContentfulAsset
                  ).fields.file.url
                }`}
                alt="blogphoto"
                className="w-full h-full object-cover
                          "
              />
            )}
          </div>
        </div>
        <div className=" col-span-2 w-full h-full ms-2 px-1 mt-3">
          <div className="grid grid-rows-4 w-full h-full ">
            <div className="block w-full row-span-1 ">
              <div className="w-full h-full ">
                {post !== undefined ? (
                  <p className=" xl:text-xl lg:text-lg md:text-lg text-start">
                    {" "}
                    {/**Category div */}
                    {post.fields.category}
                  </p>
                ) : (
                  <Link href={"/Categories/" + category?.fields.name}>
                    <p className="xl:text-xl lg:text-lg font-semibold md:text-lg text-start">
                      {category?.fields.name}
                    </p>
                  </Link>
                )}
              </div>
            </div>
            <div className="row-span-2 w-full h-full ">
              <div className="w-full h-full">
                {post !== undefined ? (
                  <Link href={"/Blogs/Article/" + post?.fields.slug}>
                    {" "}
                    <h4 className="text-wrap text-start xl:text-3xl lg:text-lg md:text-2xl font-semibold overflow-hidden">
                      {getMaxChar(post?.fields.title, 70)}
                    </h4>
                  </Link>
                ) : (
                  <div className=" w-full ">
                    <p className="text-start text-xl">
                      {category?.fields.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="row-span-1 w-full h-full ">
              <div className="w-full h-full">
                {post !== undefined ? (
                  <p className="w-full h-full xl:text-xl md:text-base text-start ">
                    {post.fields.author}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
