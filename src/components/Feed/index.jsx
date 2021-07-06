import React from "react";
import "./style.scss";
import { Posts, FeedNav } from "components";
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

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedsWrapper">
        <FeedNav />
        <Posts />
      </div>
    </div>
  );
}
