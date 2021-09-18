import React from "react";
import "./style.scss";
import { EyeMark } from "assets/icons(svg)";

const menuToggleButton = ({ click }) => (
  <button className="toggle-button" onClick={click}>
    <img src={EyeMark} />
  </button>
);

export default menuToggleButton;
