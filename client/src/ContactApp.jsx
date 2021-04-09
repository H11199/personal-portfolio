import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function ContactApp() {
  return (
    <div>
      <Header />
      <Contact
        mainTitle="Contact me"
        mainPara="Ask me anything or let me know an idea you'd like to try with me and i will get back to you ASAP"
        imgLink="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/adham-dannaway-navi.jpg"
      />
      <Footer />
    </div>
  );
}
export default ContactApp;
