import React, { useEffect, useState } from "react";
import "./style.scss";
import { getFollowSuggestions } from "network/api";
import UserTab from "./UserTab";
import ProjectTab from "./ProjectTab";

const Tabs = ({ isTouched }) => {
  const [openTab, setOpenTab] = useState(1);
  const [suggestions, setSuggestions] = useState({ users: [], projects: [] });

  const fetchSuggestions = async () => {
    try {
      const response = await getFollowSuggestions();
      setSuggestions(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);
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
                  {suggestions.projects.map(suggestion => (
                    <ProjectTab suggestion={suggestion} key={suggestion.id} isTouched={isTouched} />
                  ))}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  {suggestions.users.map(suggestion => (
                    <UserTab suggestion={suggestion} key={suggestion.public_id} isTouched={isTouched} />
                  ))}
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
