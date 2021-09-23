import React from "react";
import { ReactComponent as Drag } from "../assets/drag.svg";
import { SIZES } from "../constants";
import { ReactComponent as ImageIcon } from "../assets/image-icon.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import "../style.css";
import OptionField from "./OptionField";
import CardFooter from "./CardFooter";

const QuestionCard = () => {
  return (
    <div className="other-card" style={{ width: 749 * SIZES.scale }}>
      <Drag style={{ marginBottom: 20 }} />
      <div className="input-container">
        <div
          style={{
            width: "70%",
            display: "inline-flex",
            justifyContent: "space-between",
            borderRight: "1px solid #A0AFBF"
          }}
        >
          <input className="input-text" placeholder="Question" />
          <ImageIcon className="image-icon" />
        </div>
        <div style={{ display: "inline-flex", padding: 17 }}>
          <div style={{ marginRight: 30 }}>Multiple Choice</div>
          <Arrow style={{ marginTop: 7 }} />
        </div>
      </div>
      {/* fieldDisplay can be: multiple, rating-scale, dropdown, open-ended, file-upload, likert-scale */}
      <OptionField fieldDisplay="open-ended" />
      <CardFooter />
    </div>
  );
};

export default QuestionCard;
