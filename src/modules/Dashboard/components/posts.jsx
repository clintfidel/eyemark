import React from "react";
import { JbLogo } from "assets/images(png)";
import { MoreIcon2, Comment } from "assets/icons(svg)";
import "./style.scss";

const Post1 = ({ action, noImage = false }) => {
  return (
    <div className="new-post" onClick={action}>
      <div className="top-section flex items-center justify-between">
        <div className="flex items-center">
          <img src={JbLogo} alt="Profile-Picture" className="logo" />
          <div className="name-content">
            <h6 className="name">Julius Berger Nigeria Plc</h6>
            <div className="sub-info flex items-center">
              <p className="time">12 hours ago</p>
              <p className="dot">.</p>
              <span>STATUS</span>
              <p className="status">ONGOING</p>
            </div>
          </div>
        </div>
        <p className="category">MINISTRY 💼</p>
      </div>
      <p className="title">Updates on Construction Porgress of Ughelli</p>
      <p className="subtitle">
        Transport and mobility are a key part of today’s society. Roads must be durable and safe otherwise they present
        a danger to their users and the environment...
      </p>
      {!noImage ? (
        <img
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
          alt="post-image"
          className="post-image"
        />
      ) : null}
      <p className="awarded-to">Awarded to</p>
      <p className="company">Julius Berger Nigeria Plc</p>
      <div className="review">
        <div className="reactions">
          <p className="exicted-numbs">1,450</p>
          <img
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="reactors"
            className="pp"
          />
          <img
            src="https://images.unsplash.com/photo-1604077969015-569b97dfae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
            alt="reactors"
            className="pp"
          />
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80"
            alt="reactors"
            className="pp"
          />
          <p className="r-msg">are excited 😆</p>
        </div>
        <div className="emojis flex items-center">
          <p className="good">😶 68</p>
          <p className="weak">🙁 10</p>
          <p className="low">🤥 8</p>
        </div>
        <div className="comments-more flex items-center">
          <div className="flex items-center">
            <img src={Comment} alt="comment" />
            <p className="comment-numbs">1,531</p>
          </div>
          <img src={MoreIcon2} alt="morelike" />
        </div>
      </div>
    </div>
  );
};

const Post2 = ({}) => {
  return (
    <div className="new-post with-border">
      <div className="top-section flex items-center justify-between">
        <div className="flex items-center">
          <img src={JbLogo} alt="Profile-Picture" className="logo" />
          <div className="name-content">
            <h6 className="name">Julius Berger Nigeria Plc</h6>
            <div className="sub-info flex items-center">
              <p className="time">12 hours ago</p>
            </div>
          </div>
        </div>
        <p className="category">MINISTRY 💼</p>
      </div>
      <p className="title">Updates on Construction Porgress of Ughelli</p>
      <p className="subtitle">
        Transport and mobility are a key part of today’s society. Roads must be durable and safe otherwise they present
        a danger to their users and the environment...
      </p>
    </div>
  );
};

export { Post1, Post2 };
