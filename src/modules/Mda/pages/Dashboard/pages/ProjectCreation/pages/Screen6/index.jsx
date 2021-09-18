import React from "react";
import "../../style.scss";
import { Input } from "components";

const Screen6 = () => {
  return (
    <>
      <div className="flex project-sec-header">
        <div className="circular-progress mr-4">
          <p className="circular-progress-track">6</p>
        </div>
        <div>
          <p className="project-sec-title mb-2">Project Information</p>
          <p className="project-sec">
            {" "}
            Basic Information / Location / Theory of Change / Contractor Information / Project Tracking /{" "}
            <span className="text-black">Budget Information</span>
          </p>
        </div>
      </div>
      <div className="form-control-l mt-12">
        <div className="flex justify-between">
          <Input className="input-invite-l" placeholder="Amount mobilized" />
          <Input className="input-invite-l" placeholder="Amount Released" />
          <Input className="input-invite-l" placeholder="Amount Utilized" />
        </div>
      </div>
      <div className="mt-20">
        <hr className="" />
        <div className="flex justify-between my-3">
          <div className="previous-project">
            <p className="previous-text">Back</p>
          </div>
          <div />
        </div>
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default Screen6;
