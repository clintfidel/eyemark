import React from "react";
import "./style.scss";
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

export default function FeedNav() {
  return (
    <div className="feedNav">
      <div className="feednavWrapper">
        <ul className="mainNav">
          <li>
            <a href="#" className="nav-Link active">
              Posts
            </a>
          </li>
          <li>
            <a href="#" className="nav-Link">
              Media
            </a>
          </li>
          <li>
            <a href="#" className="nav-Link">
              Eyemarked
            </a>
          </li>
          <li>
            <a href="#" className="nav-Link">
              Followers
            </a>
          </li>
          <li>
            <a href="#" className="nav-Link">
              Following
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
