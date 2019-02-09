import React from "react";
import "./style.css";

function AvengerCard(props) {
  // const test = (props.image)
  // console.log(test)
  return (
    <div className="card">
      <div onClick={(props.avengerClicked)} className="img-container">
      <img alt={props.name} src={require("./images/"+props.image)}/></div>
    </div>
  );
}

export default AvengerCard;
