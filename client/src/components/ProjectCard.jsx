import React from "react";
import { Link } from "react-router-dom";
function ProjectCard(props) {
  return (
    <div className="col-md-4 col-12 col-sm-6 col-seperate">
      <div class="card bg-light card-animated">
        <img
          class="img-fluid card-img-top"
          src={props.item.projectImgLink}
          alt="Card image cap Responsive image"
        />
        <div class="card-body">
          <h5 class="card-title">{props.item.projectName}</h5>
          <p class="card-text">{props.item.projectContent}</p>
          <a href={props.item.projectGitLink} class="btn btn-dark">
            Visit Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
