import React, { useState } from "react";
import { AddPoint } from "modules/components";
import { NavLink } from "react-router-dom";
import { createProjectRoutes, dashboardRoutes } from "routes/routes-list";
import "../../style.scss";
import "./style.scss";
import { ArrowDown, DeleteIcon, ArrowForward, TInfo } from "assets/icons(svg)";

const Screen3 = () => {
  const [showPoint, setShowPoint] = useState(false);

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
                <div className="flex my-2 justify-between">
                  <div className="flex">
                    <p className="py-2 pr-4 theory-side-text">Impact</p>
                    <img src={TInfo} />
                  </div>
                  <img src={ArrowForward} />
                </div>
                <hr style={{ background: "#DCDCDC" }} />
              </NavLink>
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <div className="flex my-2 justify-between">
                  <div className="flex">
                    <p className="py-2 pr-4 theory-side-text">Outcomes</p>
                    <img src={TInfo} />
                  </div>
                  <img src={ArrowForward} />
                </div>{" "}
                <hr style={{ background: "#DCDCDC" }} />
              </NavLink>
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <div className="flex my-2 justify-between">
                  <div className="flex">
                    <p className="py-2 pr-4 theory-side-text">Output</p>
                    <img src={TInfo} />
                  </div>
                  <img src={ArrowForward} />
                </div>
                <hr style={{ background: "#DCDCDC" }} />
              </NavLink>
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <div className="flex my-2 justify-between">
                  <div className="flex">
                    <p className="py-2 pr-4 theory-side-text">Activities</p>
                    <img src={TInfo} />
                  </div>
                  <img src={ArrowForward} />
                </div>
                <hr style={{ background: "#DCDCDC" }} />
              </NavLink>
              <NavLink to="" className="nav" activeClassName="theory-side-active">
                <div className="flex my-2 justify-between">
                  <div className="flex">
                    <p className="py-2 pr-4 theory-side-text">Input</p>
                    <img src={TInfo} />
                  </div>
                  <img src={ArrowForward} />
                </div>
                <hr style={{ background: "#DCDCDC" }} />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="main-theory">
          <div className="theory-title-cont">
            <div className="flex w-full justify-between px-5">
              <div className="main-theory-header1">
                <p className="theory-title">Impact</p>
              </div>
              <div className="flex main-theory-header2">
                <p className="theory-title-2 mr-3">5 Points Total</p>
                <div onClick={() => setShowPoint(!showPoint)} className="point-btn px-5 py-2">
                  <p className="point-btn-text ">Add Point</p>
                </div>
                {showPoint ? <AddPoint action={() => setShowPoint(!setShowPoint)} /> : null}
              </div>
            </div>
          </div>
          <div className="px-4 py-5 flex justify-between">
            <p className="accordion-text">
              Improve productivity and incomes for smallholder farmers and informal vendors
            </p>
            <div className="flex space-x-3 w-3/12">
              <p className="acc-subpoint">ADD SUBPOINT</p>
              <img src={ArrowDown} className="w-4" />
            </div>
          </div>
          <hr />
          <div className="px-4 py-5 flex justify-between">
            <p className="accordion-text">Improve nutrition for the urban communities </p>
            <div className="flex space-x-3 w-3/12">
              <p className="acc-subpoint">ADD SUBPOINT</p>
              <img src={ArrowDown} className="w-4" />
            </div>
          </div>
          <hr />
          <div className="px-4 py-5 flex justify-between">
            <p className="accordion-text">Improved food security </p>
            <div className="flex space-x-3 w-3/12">
              <p className="acc-subpoint">ADD SUBPOINT</p>
              <img src={ArrowDown} className="w-4" />
            </div>
          </div>
          <hr />
          <div className="px-4 py-5 flex justify-between">
            <p className="accordion-text">
              Improve productivity and incomes for smallholder farmers and informal vendors
            </p>
            <div className="flex space-x-3 w-3/12">
              <p className="acc-subpoint">ADD SUBPOINT</p>
              <img src={ArrowDown} className="w-4" />
            </div>
          </div>
          <hr />
          <div className="px-4 py-5 flex justify-between">
            <p className="accordion-text">Improved food security </p>
            <div className="flex space-x-3 w-3/12">
              <p className="acc-subpoint">ADD SUBPOINT</p>
              <img src={ArrowDown} className="w-4" />
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="mt-56">
        <hr className="" />
        <div className="flex justify-between my-3">
          <NavLink
            className="previous-project"
            to={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen2}`}
          >
            <p className="previous-text">Back</p>
          </NavLink>
          <NavLink
            className="next-project py-4"
            to={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen4}`}
          >
            <p className="next-text ">Next</p>
          </NavLink>
        </div>
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default Screen3;
