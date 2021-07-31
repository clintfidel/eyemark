import React from "react";
import "./style.scss";
import { LadyImg } from "assets/icons(svg)";

const menuToggleButton = ({ click }) => (
  <button className="toggle-button" onClick={click}>
    <img src={LadyImg} />
  </button>
);

export default menuToggleButton;
