import React, { useState } from "react";
import "./style.scss";
import { SearchIcon, Person, Verified } from "assets/icons(svg)";

export default function Followers() {
  const [clickBtn, setClickBtn] = useState(false);
  const toggleBtn = () => {
    if (clickBtn) {
      setClickBtn(false);
    } else {
      setClickBtn(true);
    }
  };
  return (
    <>
      <div className="eyemarked">
        <div id="input_container">
          <img src={SearchIcon} id="input_img" />
          <input type="text" id="input" placeholder="Search projects" />
        </div>
      </div>
      <div className="block mt-5">
        <div className="flex my-10 justify-between">
          <div className="flex w-full">
            <img className="ml-4 mr-5" src={Person} />
            <div className="">
              <div className="flex">
                <p className="first-text font-bolder">Aisha Yesufu</p>
                <img className="ml-4" src={Verified} />
              </div>
              <p className="flex mt-2 sub-text-1">
                12,533 Followers
                <span className="text-status-1 ml-3">16 Following</span>
              </p>
            </div>
          </div>
          <button
            onClick={toggleBtn}
            className={`follow-button-f border-dashed ${clickBtn ? "follow-button-click-f" : "follow-button-f"}`}
          >
            {clickBtn ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </>
  );
}
