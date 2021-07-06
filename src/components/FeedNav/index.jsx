import React from "react";
import "./style.scss";
import { Posts, Media, Eyemarked, Followers, Following } from "components";
import {
  Collapse,
  LogoUp,
  PpSmall,
  More,
  Home,
  Project,
  AddIcon,
  Category,
  Notification,
  Profile,
  Settings
} from "assets/icons(svg)";

const FeedNav = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="feedNav">
      <div className="feednavWrapper">
        <ul className="mainNav">
          <li>
            <a
              className={`nav-Link ${openTab === 1 ? "active" : "nav-Link"}`}
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Posts
            </a>
          </li>
          <li>
            <a
              className={`nav-Link ${openTab === 2 ? "active" : "nav-Link"}`}
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Media
            </a>
          </li>
          <li>
            <a
              className={`nav-Link ${openTab === 3 ? "active" : "nav-Link"}`}
              onClick={e => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Eyemarked
            </a>
          </li>
          <li>
            <a
              className={`nav-Link ${openTab === 4 ? "active" : "nav-Link"}`}
              onClick={e => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#link4"
              role="tablist"
            >
              Followers
            </a>
          </li>
          <li>
            <a
              className={`nav-Link ${openTab === 5 ? "active" : "nav-Link"}`}
              onClick={e => {
                e.preventDefault();
                setOpenTab(5);
              }}
              data-toggle="tab"
              href="#link5"
              role="tablist"
            >
              Following
            </a>
          </li>
        </ul>
      </div>
      <div className="relative">
        <div className="flex-auto">
          <div className="feed-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <Posts />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <Media />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <Eyemarked />
            </div>
            <div className={openTab === 4 ? "block" : "hidden"} id="link4">
              <Followers />
            </div>
            <div className={openTab === 5 ? "block" : "hidden"} id="link5">
              <Following />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedNav;
