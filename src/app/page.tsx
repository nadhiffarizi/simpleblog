import Footer from "@/components/footer.component";
import Navbar from "@/components/navbar.component";
import Homepage from "./Home/page";

export default function Home() {
  return (
    <center>
      {" "}
      <Navbar />
      <Homepage />
      <Footer />
    </center>
  );
}
