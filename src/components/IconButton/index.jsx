import React from "react";
import "./style.scss";

/**
 * @param {image} icon
 * @param {string} className
 * @param {function} onClick
 */

export default function IconButton({ icon, className, onClick }) {
  return (
    <button onClick={onClick} className={`icon-button ${className}`}>
      <img src={icon} alt="icon-button" />
    </button>
  );
}
