import React from "react";

function JumbotronCircle(props) {
  return (
    <div className="jumbotron jumbotron-fluid jumbotron-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 center-pie-list">
            <div className="intro">
              <h1 className="heading-pie">{props.mainTitle}</h1>
              <ul>
                <li>Well I'm a foody</li>
                <li>I'm a bit of a clean freak</li>
                <li>I want to travel world</li>
                <li>Music is a stress buster for me</li>
                <li>I love to play guitar and flute</li>
                <li>I'm not much active on social media</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 img-fluid mb-4">
            <img src={props.imgLink} class="img-fluid" alt="Responsive image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JumbotronCircle;
