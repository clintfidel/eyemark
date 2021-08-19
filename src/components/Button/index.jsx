import React from "react";
import "./style.scss";

export default function Button({ text, className, onClick }) {
  return (
    <button onClick={onClick} className={`text-base default-btn text-white font-bold ${className}`}>
      {text}
    </button>
  );
}
