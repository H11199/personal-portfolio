import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import ProjectData from "./ProjectData";

function ProjectJumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid jumbotron-main" id="jumbotron-id">
      <div className="container">
        <ProjectData />
      </div>
    </div>
  );
}
export default ProjectJumbotron;
