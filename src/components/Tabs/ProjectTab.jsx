import React, { useState } from "react";
import { Person, Verified } from "assets/icons(svg)";
import { eyemarkProject } from "network/api";

const ProjectTab = ({ suggestion, isTouched }) => {
  const [clickBtn, setClickBtn] = useState(false);

  const toggleBtn = async () => {
    try {
      if (clickBtn) {
        setClickBtn(false);
        isTouched(false);
        const response = await eyemarkProject(suggestion.id);
        console.log(response.data);
      } else {
        setClickBtn(true);
        isTouched(true);
        const response = await eyemarkProject(suggestion.id);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex mb-6 justify-between">
      <div className="flex">
        <img className="mr-5" src={Person} />
        <div className="">
          <p className="first-text font-bolder">{suggestion.name}</p>
          <div className="flex mt-2 sub-text-1">
            {suggestion.states}
            <span className="text-status text-center mx-2">
              <p className="text-status-text">STATUS</p>
            </span>
            <span className="text-status-2">{suggestion.status}</span>
          </div>
        </div>
      </div>
      <button
        onClick={toggleBtn}
        className={`follow-button border-dashed ${clickBtn ? "follow-button-click" : "follow-button"}`}
      >
        {clickBtn ? "Unmark" : "Eyemark"}
      </button>
    </div>
  );
};

export default ProjectTab;
