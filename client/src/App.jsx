import React from "react";
import Home from "./Home";
import AboutApp from "./AboutApp";
import ContactApp from "./ContactApp";
import { BrowserRouter, Route } from "react-router-dom";
import ProjectApp from "./ProjectApp";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutApp} />
        <Route path="/contact" exact component={ContactApp} />
        <Route path="/project" exact component={ProjectApp} />
      </div>
    </BrowserRouter>
  );
}
export default App;
