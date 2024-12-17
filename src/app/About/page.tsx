import * as React from "react";
import HeaderCategoryXS from "@/components/HeaderDetail/headercategoryXS.component";
import HeaderCategoryMD from "@/components/HeaderDetail/headercategoryMD.component";
import Navbar from "@/components/navbar.component";
import Footer from "@/components/footer.component";

export default function About() {
  return (
    <center>
      <Navbar />

      <div className="md:hidden xs:block">
        <HeaderCategoryXS typeHeader={"About Page"} />
      </div>
      <div className="md:block xs:hidden">
        <HeaderCategoryMD typeHeader={"About Page"} />
      </div>
      <Footer />
    </center>
  );
}
