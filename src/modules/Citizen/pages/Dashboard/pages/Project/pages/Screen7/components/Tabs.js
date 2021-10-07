import React from "react";
import "../style.css";

function Tabs() {
  return (
    <div className="tabs">
      <div className="active" style={{ marginRight: 45 }}></div>
      <div className="inactive"></div>
    </div>
  );
}

export default Tabs;
