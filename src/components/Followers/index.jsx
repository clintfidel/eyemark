import React from "react";
import "./style.scss";
import { JbLogo } from "assets/images(png)";
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

export default function Followers() {
  return (
    <div className="Posts">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
            <div className="name-Active">
              <span className="postUsername">JFollowers</span>
              <span className="postActiveTime">16 hours ago</span>
            </div>
          </div>
          <div className="postTopRight">
            <span className="contractor">CONTRACTOR</span>
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
}
