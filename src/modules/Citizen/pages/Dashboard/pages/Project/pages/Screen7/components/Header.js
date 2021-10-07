import React from "react";
import Logo from "./Logo";
import Actions from "./Actions";

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <Actions />
    </div>
  );
};

export default Header;
