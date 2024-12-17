import getAllBlogPosts from "../../../utils/getAllBlogPosts";
import * as React from "react";
import HeroSectionXS from "@/components/HeroSection/herosectionXS.component";
import HeroSectionMD from "@/components/HeroSection/herosectionMD.component";
import CardContentXS from "@/components/CardContent/cardcontentXS.component";
import CardContentMD from "@/components/CardContent/cardcontentMD.component";
import Footer from "@/components/footer.component";
import getRandomEntry from "../../../utils/getRandomEntry";
import IPagePosts from "../Interface/PagePosts.interface";
import getRandomEntries from "../../../utils/getRandomEntries";

export default async function Homepage() {
  const data = await getAllBlogPosts();
  const HomePagePosts: IPagePosts = {
    featuredPost: getRandomEntry(data?.items),
    randPosts: getRandomEntries(data?.items, 5),
    allPosts: data?.items,
  };

  return (
    <>
      <div className="w-full md:h-[600px] xs:h-[400px] ">
        {" "}
        {/**full width parent hero section */}
        <div className="md:hidden xs:block">
          {" "}
          {/**Herosection on XS */}
          <HeroSectionXS post={HomePagePosts} />
        </div>
        <div className="md:block xs:hidden h-full">
          {" "}
          {/**herosection on > MD  */}
          <HeroSectionMD post={HomePagePosts} />
        </div>
      </div>

      {/**------------------------------- */}

      <div className="w-full md:h-[1400px] xs:h-[900px] ">
        {" "}
        {/**full width parent All posts */}
        <div className="w-full xs:h-[80px] md:mt-4 xs:mt-10">
          <div className="flex justify-start items-center  w-11/12 h-full ">
            <div className="w-full md:h-2/3 xs:h-1/2 border-b-2">
              <h4 className="text-start text-2xl font-semibold ">All Post</h4>
            </div>
          </div>
        </div>
        <div className="md:hidden xs:block w-11/12 h-full ">
          {HomePagePosts.randPosts?.map((post, index) => {
            return <CardContentXS key={index} post={post} />;
          })}
        </div>
        <div className="md:block xs:hidden w-11/12 h-full ">
          {HomePagePosts.randPosts?.map((post, index) => {
            return <CardContentMD key={index} post={post} />;
          })}
        </div>
      </div>
    </>
  );
}
