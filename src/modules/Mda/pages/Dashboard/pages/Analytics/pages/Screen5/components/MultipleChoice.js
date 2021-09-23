import React from "react";
import { ReactComponent as Drag } from "../assets/drag2.svg";
import { ReactComponent as Radio } from "../assets/radio.svg";
import { ReactComponent as ImageIcon } from "../assets/image-icon.svg";
import "../style.css";

const MultipleChoice = props => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "inline-flex", padding: "15px 8px 15px 0" }}>
          <Drag style={{ marginRight: 8 }} />
          <Radio />
        </div>
        <div className="option-container">
          <input className="input-text" placeholder={"Option" + props.value} />
        </div>
        <ImageIcon style={{ margin: "15px" }} />
      </div>
      <p style={{ marginTop: 17, marginLeft: 52 }}>Add option</p>
    </>
  );
};

export default MultipleChoice;
