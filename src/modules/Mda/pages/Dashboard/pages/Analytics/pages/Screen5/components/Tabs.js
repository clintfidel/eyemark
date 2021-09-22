import React from "react";
import "../style.css";

function Tabs() {
  return (
    <div className="tabs">
      <div className="active" style={{ marginRight: 45 }}>
        Questions
      </div>
      <div className="inactive">Answers</div>
    </div>
  );
}

export default Tabs;
