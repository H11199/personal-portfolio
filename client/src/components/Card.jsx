import React from "react";

function Card(props) {
  return (
    <div className="col-sm-4">
      <div class="card card-home text-center">
        <div class="card-body">
          <h5 class="card-title">
            <i class={props.iconClass}></i>
          </h5>
          <h6 class="card-subtitle mb-2  heading-tiles">{props.cardHeading}</h6>
          <p class="card-text">{props.cardPara}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
