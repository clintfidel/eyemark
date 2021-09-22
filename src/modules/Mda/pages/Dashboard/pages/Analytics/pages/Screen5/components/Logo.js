import React from "react";
import { ReactComponent as EyeMark } from "../assets/eyemark-logo.svg";

const Logo = () => {
  return (
    <div style={{ display: "flex" }}>
      <EyeMark style={{ marginRight: 5 }} />
      <p className="logo-title">Eye Mark - Survey Creator</p>
    </div>
  );
};

export default Logo;
