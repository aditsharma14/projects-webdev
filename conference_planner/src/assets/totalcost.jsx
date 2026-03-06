import React from "react";
import "./totalcost.css";

const TotalCost = ({totalCosts, ItemsDisplay}) => {
  const total_amount = totalCosts.av + totalCosts.venue + totalCosts.meals;
  return (
    <div className="pricing-app">
      <div className="display-box">
        <div className="header">
            <p className="pre-heading"><h3>Total cost for the event</h3></p>
        </div>
      <h2 id="pre-fee-cost-display">${total_amount}</h2>
      <div className="render-items">
        <ItemsDisplay />
      </div>
    </div>
    </div>
  );
}

export default TotalCost
