import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { SearchIcon, ProjectsIcon } from "assets/icons(svg)";
import "./style.scss";

export function Screen3({ history }) {
  const { t } = useTranslation();
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
      <Helmet>
        <title>Eyemark - Eyemarked</title>
      </Helmet>
      <div className="profile-eyemarked">
        <div className="eyemarked">
          <div id="input_container">
            <img src={SearchIcon} id="input_img" />
            <input type="text" id="input" placeholder="Search projects" />
          </div>
        </div>
        <div className="block mt-5">
          <div className="flex my-10 justify-between">
            <div className="flex w-full">
              <img className="mr-5" src={ProjectsIcon} />
              <div className="">
                <p className="first-text font-bolder">Lekki-Ikoyi Link Bridge</p>
                <p className="flex mt-2 sub-text-1">
                  Lekki-ikoyi, lagos
                  <span className="text-status text-center mx-2">
                    <p className="text-status-text">STATUS</p>
                  </span>
                  <span className="text-status-2">ongoing</span>
                </p>
              </div>
            </div>
            <button
              onClick={toggleBtn}
              className={`follow-button-e border-dashed ${clickBtn ? "follow-button-click-e" : "follow-button-e"}`}
            >
              {clickBtn ? "Unmark" : "Eyemark"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen3;
