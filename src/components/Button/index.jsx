import React from "react";
import "./style.scss";

export default function Button({ text, className, onClick, disabled, loading }) {
  return (
    <button
      onClick={disabled || loading ? () => {} : onClick}
      className={`text-base default-btn text-white font-bold ${className} ${disabled ? "button-disabled" : ""}`}
    >
      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        text
      )}
    </button>
  );
}
