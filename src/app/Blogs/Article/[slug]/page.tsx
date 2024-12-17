"use client";
import Footer from "@/components/footer.component";
import Navbar from "@/components/navbar.component";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Entry } from "contentful";
import { TypeSimpleBlog } from "../../../../../contentful/contentfulTypes";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import * as React from "react";
import getArticle from "../../../../../utils/getArticle";
import { useParams } from "next/navigation";
import { useState } from "react";
import { TypeSimpleBlogFields } from "../../../../../contentful/contentfulTypes";
import RichText from "@/components/RichText/richtext.component";

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const [article, setArticle] = useState<TypeSimpleBlogFields>();

  const fetchArticle = async () => {
    try {
      const data = await getArticle(params.slug);
      setArticle(data?.items[0].fields);
    } catch (error) {
      console.log("error in fetching article", error);
    }
  };

  React.useEffect(() => {
    fetchArticle();
  }, []);

  // if (!document) return null;

  return (
    <center>
      <Navbar />

      <div className="w-full bg-slate-100">
        <div className="md:hidden xs:block w-full h-full">
          {" "}
          {/**Article on XS main Div*/}
          <div className="flex justify-start items-end w-11/12 h-[40px] ">
            {/**Category container */}
            <p className="text-base text-center text-[#222536] font-thin">
              {article?.category}
            </p>
          </div>
          <div className="flex justify-center items-center w-11/12 h-[150px] ">
            {" "}
            {/** Title container*/}
            <h1 className="text-2xl font-bold text-start">{article?.title}</h1>
          </div>
          <div className="flex justify-start items-end w-11/12 h-[40px] ">
            {/**Author container */}
            <p className="text-base text-center text-[#222536] font-semibold mb-2">
              Written by: {article?.author}
            </p>
          </div>
          <div className="flex justify-center items-center w-11/12 h-[250px] ">
            {" "}
            {/**Image container*/}
            <img
              src={`https:${article?.headlineImage.fields.file?.url}`}
              alt="heroimage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center w-11/12">
            {" "}
            {/**Article container*/}
            <RichText document={article?.article} />
          </div>
        </div>
        <div className="md:block xs:hidden w-full h-full">
          {" "}
          {/**Article on MD main Div*/}
          <div className="flex justify-start items-end w-11/12 h-[40px] ">
            {/**Category container */}
            <p className="text-base text-center text-[#222536] font-thin">
              {article?.category}
            </p>
          </div>
          <div className="flex justify-center items-center w-11/12 h-[100px] ">
            {" "}
            {/** Title container*/}
            <h1 className="text-2xl font-bold text-start">{article?.title}</h1>
          </div>
          <div className="flex justify-start items-end w-11/12 h-[40px] mb-3">
            {/**Author container */}
            <p className="text-base text-center text-[#222536] font-semibold mb-2">
              Written by: {article?.author}
            </p>
          </div>
          <div className="flex justify-center items-center w-11/12 h-[250px] ">
            {" "}
            {/**Image container*/}
            <img
              src={`https:${article?.headlineImage.fields.file?.url}`}
              alt="heroimage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center w-11/12">
            {" "}
            {/**Article container*/}
            <RichText document={article?.article} />
          </div>
        </div>
      </div>
      <Footer />
    </center>
  );
}
