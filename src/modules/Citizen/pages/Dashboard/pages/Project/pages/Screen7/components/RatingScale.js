import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { SIZES } from "../constants";
import { ReactComponent as Drag } from "../assets/drag.svg";
import "../style.css";

const StarRating = () => {
  return (
    <div className="other-card" style={{ width: 749 * SIZES.scale }}>
      <Drag style={{ marginBottom: 20 }} />
      <div className="">
        <div style={{ display: "inline-flex", padding: 2 }}>
          <div className="mb-5">Which of these is correct about this project?</div>
        </div>
      </div>
      <div className="mt-2">
        <Rating className="pr-3" onClick={console.log("value")} ratingValue={2} /* Rating Props */ />
      </div>
    </div>
  );
};

export default StarRating;
