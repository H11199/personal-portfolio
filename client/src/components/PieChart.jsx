import React from "react";

function PieChart() {
  return (
    <div className="jumbotron jumbotron-fluid jumbotron-pie" id="jumbotron-id">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 center-pie-list">
            <h1 className="heading-pie">Part designer</h1>
            <ul>
              <li>UI design</li>
              <li>UX design</li>
              <li>Interaction design</li>
              <li>"Making it pop"</li>
            </ul>
          </div>
          <div className="col-sm-4 center-pie-list">
            <img
              src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/pie-chart.png"
              class="img-fluid"
              alt="Responsive image"
            />
          </div>
          <div className="col-sm-4 center-pie-list">
            <h1 className="heading-pie">Part Coder</h1>
            <ul>
              <li>Front-end development</li>
              <li>Back-end development</li>
              <li>Python and Java Programming</li>
              <li>Machine Learning and Data Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
