import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid jumbotron-main" id="jumbotron-id">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 ">
            <div className="intro">
              <h1 className="left-heading">{props.mainTitle}</h1>
              <p className="home-para">{props.mainPara}</p>
            </div>
          </div>
          <div className="col-sm-4 img-fluid mb-4">
            <img
              src={props.imgLink}
              class="img-fluid"
              alt="Responsive image"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Jumbotron;
