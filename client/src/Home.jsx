import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import TileRow from "./components/TileRow";
import him3 from "../src/images/himanshu-400x400.jpg";
function Home() {
  return (
    <div>
      <Header />
      <Jumbotron
        mainTitle="FULL STACK WEB DEVELOPER"
        mainPara="A full stack web-developer who loves to create beautifull and
      creative websites that converts visitors into customers and help
      your buisness grows. My expertise in the area of both backend and frontend with responsive designining. With every line of code i  strive to make a web a beautiful place."
        imgLink={him3}
      />
      <TileRow />
      <Footer />
    </div>
  );
}
export default Home;
