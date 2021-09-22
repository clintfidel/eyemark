import React, { useState } from "react";
import "../../style.scss";
import "./style.scss";
import { Switch, Route, useRouteMatch, NavLink, Redirect } from "react-router-dom";

import { AddMore, DeleteIcon } from "assets/icons(svg)";

const Screen3 = () => {
  return (
    <>
      <div className="flex project-sec-header">
        <div className="circular-progress mr-4">
          <p className="circular-progress-track">3</p>
        </div>
        <div>
          <p className="project-sec-title mb-2">Project Information</p>
          <p className="project-sec">
            {" "}
            Basic Information / Location / <span className="text-black">Theory of Change</span> / Contractor Information
            / Project Tracking / Budget Information
          </p>
        </div>
      </div>
      <div className="flex mt-10 theory-cont">
        <div className="sidebar-theory">
          <div className="theory-title-cont">
            <p className="theory-title ml-4">Theory</p>
          </div>
          <div className="p-4">
            <div className="navigation2">
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <p className="py-2 theory-side-text">Impact</p>
                <hr />
              </NavLink>
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <p className="py-2 theory-side-text">Outcomes</p>
                <hr />
              </NavLink>
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <p className="py-2 theory-side-text">Output</p>
                <hr />
              </NavLink>
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <p className="py-2 theory-side-text">Activities</p>
                <hr />
              </NavLink>
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <p className="py-2 theory-side-text">Input</p>
                <hr />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="main-theory">
          <div className="theory-title-cont">
            <div className="flex main-theory-header justify-between">
              <div className="main-theory-header1">
                <p className="theory-title ml-4">Impact</p>
              </div>
              <div className="flex main-theory-header2 flex-end">
                <p className="theory-title-2 mr-5">5 Points Total</p>
                <div className="point-btn px-5 py-2">
                  <p className="point-btn-text">Add Point</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-56">
        <hr className="" />
        <div className="flex justify-between my-3">
          <div className="previous-project">
            <p className="previous-text">Back</p>
          </div>
          <div className="next-project py-4">
            <p className="next-text ">Next</p>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default Screen3;
