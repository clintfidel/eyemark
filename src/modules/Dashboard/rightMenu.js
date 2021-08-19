import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { LadyImg } from "assets/icons(svg)";

const menuToggleButton = ({ link }) => (
  <NavLink to={link}>
    <button className="toggle-button">
      <img src={LadyImg} />
    </button>
  </NavLink>
);

export default menuToggleButton;
