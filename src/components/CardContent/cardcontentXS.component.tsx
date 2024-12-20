import * as React from "react";
import {
  TypeCategorySimpleBlog,
  TypeSimpleBlog,
} from "../../../contentful/contentfulTypes";
import { Entry } from "contentful";
import getMaxChar from "../../../utils/getMaxChar";
import { IContentfulAsset } from "../../../contentful/contentfulTypes/TypeSimpleBlog";
import Link from "next/link";
import { ITypeSimpleBlog } from "../../../contentful/contentfulTypes/TypeSimpleBlog";

interface IContentCard {
  post?:
    | Entry<ITypeSimpleBlog, undefined, string>
    | Entry<TypeSimpleBlog, undefined, string>;
  category?: Entry<TypeCategorySimpleBlog, undefined, string>;
}

export default function CardContentXS({ post, category }: IContentCard) {
  return (
    <div className="flex w-full h-[150px] mt-3 pb-3 border-b-2">
      <div className="grid grid-cols-5 w-full h-full ">
        <div className=" col-span-2 ">
          {/**grid image div */}
          <div className="flex justify-center items-center w-full h-full ">
            {/**Image div */}
            {post !== undefined ? (
              <img
                src={`https:${
                  (post.fields?.headlineImage as unknown as IContentfulAsset)
                    ?.fields.file.url
                }`}
                alt="blogphoto"
                className="w-full h-full object-cover
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
        <div className=" col-span-3  ">
          {/**grid detail article div */}
          <div className="flex flex-col justify-between items-start mx-2 my-2 gap-2">
            {" "}
            {post !== undefined ? (
              <p className="text-sm">{post.fields.category}</p>
            ) : (
              <h4 className="flex text-wrap text-start text-xl font-semibold">
                <Link href={"/Categories/" + category?.fields.name}>
                  {category?.fields.name}
                </Link>
              </h4>
            )}{" "}
            {post !== undefined ? (
              <>
                <h4 className="flex text-wrap text-start text-sm font-semibold h-[60px]">
                  <Link href={"/Blogs/Article/" + post.fields.slug}>
                    {getMaxChar(post.fields.title, 60)}
                  </Link>
                </h4>
                <p className="text-sm">{post.fields.author}</p>
              </>
            ) : (
              <div className=" w-full h-[60px] ">
                <p className="text-start text-sm">
                  {category?.fields.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
