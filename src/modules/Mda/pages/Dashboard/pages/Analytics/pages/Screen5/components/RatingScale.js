import React from "react";
import "../style.css";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

const RatingScale = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className="input-container"
          style={{ width: 127, display: "inline-flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <span>1</span>
          <Arrow />
        </div>
        <div style={{ marginLeft: 14, marginRight: 14, paddingTop: 19 }}>to</div>
        <div
          className="input-container"
          style={{ width: 127, display: "inline-flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <span>5</span>
          <Arrow />
        </div>
      </div>
      <div>
        <div className="input-container" style={{ width: 237, display: "inline-flex" }}>
          <div style={{ width: 37, borderRight: "1px solid #A0AFBF" }}>
            <div style={{ paddingTop: 18 }}>1</div>
          </div>
          <input className="pl-5" placeholder="Label (Optional)" />
        </div>
      </div>
    </>
  );
};

export default RatingScale;
