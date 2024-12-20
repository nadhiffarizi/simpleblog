import * as React from "react";
import HeaderCategoryXS from "@/components/HeaderDetail/headercategoryXS.component";
import HeaderCategoryMD from "@/components/HeaderDetail/headercategoryMD.component";
import Navbar from "@/components/navbar.component";
import getAllBlogPosts from "../../../utils/getAllBlogPosts";
import IPagePosts from "../Interface/PagePosts.interface";
import getRandomEntries from "../../../utils/getRandomEntries";
import CardContentXS from "@/components/CardContent/cardcontentXS.component";
import CardContentMD from "@/components/CardContent/cardcontentMD.component";
import Footer from "@/components/footer.component";

export default async function Blogs() {
  const data = await getAllBlogPosts();
  const BlogPagePosts: IPagePosts = {
    randPosts: getRandomEntries(data?.items, 10),
  };

  return (
    <center>
      <Navbar />

      <div className="md:hidden xs:block w-full">
        <HeaderCategoryXS typeHeader={"Blogs"} />
      </div>
      <div className="md:block xs:hidden">
        <HeaderCategoryMD typeHeader={"Blogs"} />
      </div>

      <div className="w-full ">
        {" "}
        {/**full width parent All posts */}
        <div className="w-full xs:h-[80px] md:mt-4 xs:mt-10">
          <div className="flex justify-start items-center  w-11/12 h-full ">
            <div className="w-full md:h-2/3 xs:h-1/2 border-b-2">
              <h4 className="text-start text-2xl font-semibold ">All Blogs</h4>
            </div>
          </div>
        </div>
        <div className="md:hidden xs:block w-11/12 h-full ">
          {BlogPagePosts.randPosts?.map((post, index) => {
            return (
              <CardContentXS key={index} post={post} category={undefined} />
            );
          })}
        </div>
        <div className="md:block xs:hidden w-11/12 h-full ">
          {BlogPagePosts.randPosts?.map((post, index) => {
            return <CardContentMD key={index} post={post} />;
          })}
        </div>
      </div>

      <Footer />
    </center>
  );
}
