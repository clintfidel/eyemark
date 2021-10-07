import React from "react";
import { ReactComponent as Drag } from "../assets/drag.svg";
import { SIZES } from "../constants";
import { ReactComponent as ImageIcon } from "../assets/image-icon.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import "../style.css";

const QuestionCard = () => {
  return (
    <div className="other-card" style={{ width: 749 * SIZES.scale }}>
      <Drag style={{ marginBottom: 20 }} />
      <div className="">
        <div style={{ display: "inline-flex", padding: 2 }}>
          <div className="mb-5">Which of these is correct about this project?</div>
        </div>
      </div>
      <div className="a-survey-cont">
        <input className="mr-3 a-survey-radio" name="option" type="radio" />
        <label htmlFor="option">Option1</label>
      </div>
      <div className="a-survey-cont">
        <input className="mr-3 a-survey-radio" name="option" type="radio" />
        <label htmlFor="option">Option1</label>
      </div>
    </div>
  );
};

export default QuestionCard;
