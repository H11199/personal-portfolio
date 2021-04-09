import React from "react";
import reactDom from "react-dom";

import ProjectCard from "./ProjectCard";
import { ProjectValue } from "./ProjectValue";

class ProjectData extends React.Component {
  state = { tmp: [] };

  helper = () => {
    this.setState({
      tmp: ProjectValue(),
    });
  };
  componentDidMount() {
    this.helper();
  }

  onrenderList = () => {
    return this.state.tmp.map((item) => {
      return <ProjectCard item={item} />;
    });
  };

  render() {
    return <div className="row">{this.onrenderList()}</div>;
  }
}

export default ProjectData;
