import React from "react";
import "../../style.scss";
import "./style.scss";

import { Input, Textarea, SelectField } from "components";
import { PencilIcon } from "assets/icons(svg)";

const Screen1 = () => {
  return (
    <>
      <div className="flex project-sec-header">
        <div className="circular-progress mr-4">
          <p className="circular-progress-track">1</p>
        </div>
        <div>
          <p className="project-sec-title mb-2">Project Information</p>
          <p className="project-sec">
            {" "}
            <span className="text-black">Basic Information</span> / Location / Theory of Change / Contractor Information
            / Project Tracking / Budget Information
          </p>
        </div>
      </div>
      <div className="flex info-cont mt-10">
        <div className="info-image-cont">
          <img className="pencil-select" src={PencilIcon} />
        </div>
        <div className="form-cont">
          <Input className="input-invite" placeholder="Project Name" />
          <div className="form-control-d">
            <div className="flex justify-between mt-8">
              <SelectField label="Category" className="select-container" />
              <SelectField label="Sub-Category" className="select-container" />
            </div>
            <div className="flex justify-between">
              <Input className="input-invite" placeholder="Company Name" />
              <SelectField label="Project Timeline" className="select-container" />{" "}
            </div>
            <div className="flex justify-between">
              <SelectField label="Start Date" className="select-container" />
              <SelectField label="End Date" className="select-container" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-100">
        <div className="text-area-project">
          <p className="project-desc pb-4">Description</p>
          <Textarea className="p-text-area" placeholder="Write description here..." />
        </div>
        <div className="text-area-project">
          <p className="project-desc pb-4">Project Tags</p>
          <div className="text-area-tag"></div>
        </div>
      </div>
      <div className="mt-20">
        <hr className="" />
        <div className="flex justify-between my-3">
          <div />
          <div className="next-project py-4">
            <p className="next-text ">Next</p>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default Screen1;
