import React from "react";
import pic from "../images/guessNumber.png";
function Frames(props) {
  return (
    <div className="container">
      <div className="center">
        <div className="row">
          <div className="col-6 col-md-2 col-sm-4">
            <img
              src={pic}
              class="img-fluid img-thumbnail img-hover"
              alt="Responsive image"
            />
          </div>
          <div className="col-6 col-md-2 col-sm-4">
            <img
              src={props.imgLink2}
              class="img-fluid img-thumbnail img-hover"
              alt="Responsive image"
            />
          </div>
          <div className="col-6 col-md-2 col-sm-4">
            <img
              src={props.imgLink3}
              class="img-fluid img-thumbnail img-hover"
              alt="Responsive image"
            />
          </div>
          <div className="col-6 col-md-2 col-sm-4">
            <img
              src={props.imgLink4}
              class="img-fluid img-thumbnail img-hover"
              alt="Responsive image "
            />
          </div>
          <div className="col-6 col-md-2 col-sm-4">
            <img
              src={props.imgLink5}
              class="img-fluid img-thumbnail img-hover"
              alt="Responsive image "
            />
          </div>
          <div className="col-6 col-md-2 col-sm-4">
            <img
              src={props.imgLink6}
              class="img-fluid img-thumbnail img-hover"
              alt="Responsive image "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frames;
