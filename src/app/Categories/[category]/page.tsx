"use client";
import Footer from "@/components/footer.component";
import Navbar from "@/components/navbar.component";
import * as React from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { TypeSimpleBlog } from "../../../../contentful/contentfulTypes";
import getPostsByCategory from "../../../../utils/getPostsByCategory";
import { useEffect } from "react";
import { Entry } from "contentful";
import CardContentXS from "@/components/CardContent/cardcontentXS.component";
import CardContentMD from "@/components/CardContent/cardcontentMD.component";
import HeaderCategoryMD from "@/components/HeaderDetail/headercategoryMD.component";
import HeaderCategoryXS from "@/components/HeaderDetail/headercategoryXS.component";
import { ITypeSimpleBlog } from "../../../../contentful/contentfulTypes/TypeSimpleBlog";

export default function CategoryPosts() {
  const params = useParams<{ category: string }>();
  const [posts, setPosts] = useState<
    | Entry<ITypeSimpleBlog, undefined, string>[]
    | Entry<TypeSimpleBlog, undefined, string>[]
  >();

  const fetchCategories = async () => {
    try {
      const data = await getPostsByCategory(params.category);
      setPosts(data?.items);
    } catch (error) {
      console.log("error in fetching article", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // if (!document) return null;

  return (
    <center>
      <Navbar />

      <div className="md:hidden xs:block w-full">
        <HeaderCategoryXS typeHeader={`${params.category} Posts`} />
      </div>
      <div className="md:block xs:hidden">
        <HeaderCategoryMD typeHeader={`${params.category} Posts`} />
      </div>

      <div className="w-full bg-slate-100">
        <div className="w-full ">
          {" "}
          {/**full width parent All posts */}
          <div className="w-full xs:h-[80px] md:mt-4 xs:mt-10">
            <div className="flex justify-start items-center  w-11/12 h-full ">
              <div className="w-full md:h-2/3 xs:h-1/2 border-b-2">
                <h4 className="text-start text-2xl font-semibold ">
                  All Posts From {params.category}
                </h4>
              </div>
            </div>
          </div>
          <div className="md:hidden xs:block w-11/12 h-full ">
            {/**XS version */}
            {posts?.map(
              (
                post:
                  | Entry<ITypeSimpleBlog, undefined, string>
                  | Entry<TypeSimpleBlog, undefined, string>,
                index: number
              ) => {
                return (
                  <CardContentXS key={index} post={post} category={undefined} />
                );
              }
            )}
          </div>
          <div className="md:block xs:hidden w-11/12 h-full ">
            {posts?.map(
              (
                post:
                  | Entry<ITypeSimpleBlog, undefined, string>
                  | Entry<TypeSimpleBlog, undefined, string>,
                index: number
              ) => {
                return (
                  <CardContentMD key={index} post={post} category={undefined} />
                );
              }
            )}
          </div>
        </div>
      </div>
      <Footer />
    </center>
  );
}
