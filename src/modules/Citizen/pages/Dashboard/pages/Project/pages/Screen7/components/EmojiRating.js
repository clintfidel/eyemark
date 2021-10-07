import React, { useState } from "react";
import { SIZES } from "../constants";
import { ReactComponent as Drag } from "../assets/drag.svg";
import { Emoji1, Emoji2, Emoji3, Emoji4, Emoji5 } from "assets/icons(svg)";
import "../style.css";

const EmojiRating = () => {
  return (
    <div className="other-card" style={{ width: 749 * SIZES.scale }}>
      <Drag style={{ marginBottom: 20 }} />
      <div className="">
        <div style={{ display: "inline-flex", padding: 2 }}>
          <div className="mb-5">Which of these is correct about this project?</div>
        </div>
      </div>
      <div className="mt-2 flex ">
        <img className="mr-5 emoji" src={Emoji1} />
        <img className="mr-5 emoji" src={Emoji2} />
        <img className="mr-5 emoji" src={Emoji2} />
        <img className="mr-5 emoji" src={Emoji4} />
        <img className="mr-5 emoji" src={Emoji5} />
      </div>
    </div>
  );
};

export default EmojiRating;
