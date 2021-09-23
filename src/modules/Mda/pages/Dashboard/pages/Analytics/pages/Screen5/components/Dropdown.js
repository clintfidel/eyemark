import React from "react";
import { ReactComponent as Drag } from "../assets/drag2.svg";
import "../style.css";

const MultipleChoice = props => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "inline-flex", padding: "15px 8px 15px 0" }}>
          <Drag style={{ marginRight: 5 }} />
        </div>
        <div className="option-container">
          <input className="input-text" placeholder={"Option " + props.value} />
        </div>
      </div>
      <p style={{ marginTop: 17, marginLeft: 52 }}>Add option</p>
    </>
  );
};

export default MultipleChoice;
