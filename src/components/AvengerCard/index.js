import React from "react";
import "./style.css";

function AvengerCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img  onClick={() => props.avengerClicked(props.id)}
        alt={props.name} src={props.image} />
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
      {/* <span onClick={() => props.avengerClicked(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default AvengerCard;
