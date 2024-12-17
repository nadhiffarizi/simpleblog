import * as React from "react";
import HeaderCategoryXS from "@/components/HeaderDetail/headercategoryXS.component";
import HeaderCategoryMD from "@/components/HeaderDetail/headercategoryMD.component";
import Navbar from "@/components/navbar.component";
import CardContentXS from "@/components/CardContent/cardcontentXS.component";
import CardContentMD from "@/components/CardContent/cardcontentMD.component";
import Footer from "@/components/footer.component";
import getCategoriesName from "../../../utils/getCategoriesName";

export default async function Categories() {
  const data = await getCategoriesName();
  return (
    <center>
      <Navbar />

      <div className="md:hidden xs:block w-full">
        <HeaderCategoryXS typeHeader={"Categories"} />
      </div>
      <div className="md:block xs:hidden">
        <HeaderCategoryMD typeHeader={"Categories"} />
      </div>

      <div className="w-full ">
        {" "}
        {/**full width parent All posts */}
        <div className="w-full xs:h-[80px] md:mt-4 xs:mt-10">
          <div className="flex justify-start items-center  w-11/12 h-full ">
            <div className="w-full md:h-2/3 xs:h-1/2 border-b-2">
              <h4 className="text-start text-2xl font-semibold ">
                All Categories
              </h4>
            </div>
          </div>
        </div>
        <div className="md:hidden xs:block w-11/12  ">
          {data?.items.map((category, index) => {
            return (
              <CardContentXS key={index} post={undefined} category={category} />
            );
          })}
        </div>
        <div className="md:block xs:hidden w-11/12 ">
          {data?.items.map((category, index) => {
            return (
              <CardContentMD key={index} post={undefined} category={category} />
            );
          })}
        </div>
      </div>

      <Footer />
    </center>
  );
}
