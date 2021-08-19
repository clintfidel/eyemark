import React, { useState } from "react";
import "./style.scss";
import { Person, Verified } from "assets/icons(svg)";

const Tabs = ({ isTouched }) => {
  const [openTab, setOpenTab] = useState(1);
  const [clickBtn, setClickBtn] = useState(false);
  const [clickBtn2, setClickBtn2] = useState(false);
  const toggleBtn = () => {
    if (clickBtn) {
      setClickBtn(false);
      isTouched(false);
    } else {
      setClickBtn(true);
      isTouched(true);
    }
  };
  const toggleBtn2 = () => {
    if (clickBtn2) {
      setClickBtn2(false);
      isTouched(false);
    } else {
      setClickBtn2(true);
      isTouched(true);
    }
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex border-b mb-0 list-none flex-wrap pt-3 flex-row" role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold py-3 block leading-normal " + (openTab === 1 ? "tabs-active" : "tabs-default")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="text-base mr-1"></i> Projects
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold py-3 block leading-normal " + (openTab === 2 ? "tabs-active" : "tabs-default")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="text-base mr-1"></i> People
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex mb-6 justify-between">
                    <div className="flex">
                      <img className="mr-5" src={Person} />
                      <div className="">
                        <p className="first-text font-bolder">Lekki-Ikoyi Link Bridge</p>
                        <div className="flex mt-2 sub-text-1">
                          Lekki-ikoyi, lagos
                          <span className="text-status text-center mx-2">
                            <p className="text-status-text">STATUS</p>
                          </span>
                          <span className="text-status-2">ongoing</span>
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
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex mb-6 justify-between">
                    <div className="flex">
                      <img className="mr-5" src={Person} />
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
                      onClick={toggleBtn2}
                      className={`follow-button border-dashed ${clickBtn2 ? "follow-button-click" : "follow-button"}`}
                    >
                      {clickBtn2 ? "Unfollow" : "Follow"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
