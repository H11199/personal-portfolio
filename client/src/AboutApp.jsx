import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Frames from "./components/Frames";
import PieChart from "./components/PieChart";
import JumbotronCircle from "./components/JumbotronCircle";
import BarGraph from "./components/BarGraph";
import img1 from "../src/images/image1.jpeg";
import img2 from "../src/images/image2.jpeg";
import img3 from "../src/images/image3.jpeg";
import img4 from "../src/images/image4.jpeg";
import img5 from "../src/images/image5.jpeg";
import img6 from "../src/images/image6.jpeg";
import him2 from "../src/images/himanshu2.jpeg";

function AboutApp() {
  return (
    <div>
      <Header />
      <Jumbotron
        mainTitle="about me"
        mainPara="I am a Full Stack web developer based on Rajasthan, India. I love to solve out real world problems through my skills. when I'm not working on my laptop you'll find me sketching, playing flute or playing cricket."
        imgLink={him2}
      />
      <Frames
        imgLink1={img1}
        imgLink2={img2}
        imgLink3={img3}
        imgLink4={img4}
        imgLink5={img5}
        imgLink6={img6}
      />
      <PieChart />
      <JumbotronCircle
        mainTitle="Random Facts"
        mainPara="I drink a lot of tea
      I'm into interior design
      I love to cook (and eat)
      I'm a bit of a clean freak
      I want to live on Pandora
      I worship Jedi Master Yoda
      I'm addicted to Twitter"
        imgLink="https://i.pinimg.com/564x/55/27/c1/5527c17e3e5adfeb90ea6d19cc5f87de.jpg"
      />
      <BarGraph />
      <Footer />
    </div>
  );
}
export default AboutApp;
