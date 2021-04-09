import React from "react";

function BarGraph() {
  return (
    <div className="jumbotron jumbotron-fluid jumbotron-pie">
      <div class="container">
        <h1>Skill Set</h1>
        <div class="bar learning" data-skill="ML"></div>
        <div class="bar back basic" data-skill="Python"></div>
        <div class="bar back advanced" data-skill="Java"></div>
        <div class="bar front advanced" data-skill="CSS3"></div>
        <div class="bar back expert" data-skill="HTML5"></div>
        <div class="bar back advanced" data-skill="Node.js"></div>
        <div class="bar advanced" data-skill="MongoDB"></div>
        <div class="bar intermediate" data-skill="REST API"></div>
        <div class="bar front basic" data-skill="React js"></div>
        <div class="bar back intermediate" data-skill="R programming"></div>
      </div>
    </div>
  );
}
export default BarGraph;
