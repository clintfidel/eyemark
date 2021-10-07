import React from "react";
import { SIZES } from "../constants";
import { ReactComponent as Drag } from "../assets/drag.svg";
import "../style.css";

const OpenEnded = () => {
  return (
    <div className="other-card" style={{ width: 749 * SIZES.scale }}>
      <Drag style={{ marginBottom: 20 }} />
      <div className="">
        <div style={{ display: "inline-flex", padding: 2 }}>
          <div className="mb-5">Which of these is correct about this project?</div>
        </div>
      </div>
      <textarea className="textarea" style={{ width: "100%" }} placeholder="Placeholder" />
    </div>
  );
};

export default OpenEnded;
