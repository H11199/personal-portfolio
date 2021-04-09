import React from "react";
import Card from "./Card";

function TileRow() {
  return (
    <div className="container">
      <div className="center">
        <div className="row">
          <Card
            iconClass="fas fa-paint-brush"
            cardHeading="Creative design"
            cardPara="more beautiful design which attracts more"
          />
          <Card
            iconClass="fas fa-chart-line"
            cardHeading="Data analytics"
            cardPara="Loves to do analysis on data to solve certain industrial problems."
          />
          <Card
            iconClass="fas fa-brain"
            cardHeading="Flask"
            cardPara="Also building websites in flask to provide them intelligence via machine learning."
          />
        </div>
      </div>
    </div>
  );
}

export default TileRow;
