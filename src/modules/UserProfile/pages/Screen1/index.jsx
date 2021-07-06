import React from "react";
import { Helmet } from "react-helmet";
import { SideBar, Feed, RightBar } from "components";
import "./style.scss";

export function Screen1() {
  return (
    <>
      <Helmet>
        <title>Eyemark - Profile</title>
      </Helmet>
      <div className="container">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default Screen1;
