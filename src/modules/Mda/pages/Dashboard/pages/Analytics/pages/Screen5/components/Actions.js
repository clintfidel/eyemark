import React from "react";
import FMHADMSDLogo from "../assets/FMHADMSDLogo.png";

const Actions = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="button-white" style={{ marginRight: 16 }}>
        Save
      </div>
      <div className="button-yellow">Publish</div>
      <img src={FMHADMSDLogo} alt="logo" style={{ marginLeft: 48, width: 40, height: 40 }} />
    </div>
  );
};

export default Actions;
