import React from "react";
import "./style.css";

function AvengerCard(props) {
  return (
    <div className="card">
      <div onClick={(props.avengerClicked)} className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default AvengerCard;
