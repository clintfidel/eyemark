import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { JbLogo } from "assets/images(png)";
import { UpVote, DownVote, MoreIcon2 } from "assets/icons(svg)";
import "./style.scss";
import { Comment } from "assets/icons(svg)";
import Button from "components/Button";
import { Emoji } from "assets/icons(svg)";
import { ArrowDown } from "assets/icons(svg)";
import Input from "components/Input";
import Textarea from "components/Textarea";
import { AddImage } from "assets/icons(svg)";

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

const MiniPost = ({}) => {
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

const Comments = ({ image, action }) => {
  return (
    <div className="new-post" onClick={action}>
      <div className="top-section flex items-center justify-between">
        <div className="flex items-center">
          <div className="name-content">
            <h6 className="name">Mariam Abubakar</h6>
            <div className="sub-info flex items-center">
              <p className="time">8 hours ago</p>
            </div>
          </div>
        </div>
      </div>
      <p className="title">Super Pleased</p>
      <p className="subtitle">
        SGS INTRON assists our clients with any questions on the performance and durability of road materials and
        products. To this end we offer a wide array of services including testing, research and assessment...
      </p>
      <img src={image} alt="post-image" className="post-image" />
      <div style={{ marginBottom: "50px" }} />
      <div className="review">
        <div className="reactions">
          <div className="rating flex items-center" style={{ marginRight: "40px" }}>
            <img src={UpVote} alt="up vote" className="icon" />
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
            <p>24</p>
          </div>
          <div className="rating flex items-center">
            <img src={DownVote} alt="down vote" className="icon" />
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
            <p>4</p>
          </div>
        </div>
        <div className="comments-more flex items-center">
          <img src={MoreIcon2} alt="morelike" />
        </div>
      </div>
    </div>
  );
};

const CommentModal = ({ action }) => {
  return (
    <div className="comment-modal">
      <div className="card">
        <div className="comment flex items-start">
          <div className="com-left flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2688&q=80"
              alt="pp"
            />
            <div className="vr2" style={{ height: "250px" }} />
          </div>
          <div className="com-right">
            <div className="top-section flex items-center justify-between mb-5">
              <p className="title">Deborah Olabanji</p>
              <div className="feelings-sel">
                <img src={Emoji} alt="emoji" />
                <p>Feelings</p>
                <img src={ArrowDown} alt="emoji" />
              </div>
            </div>
            <Input placeholder="Title" />
            <Textarea placeholder="Write something, anything..." requiredValue={300} className="txt-sm" />
            <div className="flex items-center">
              <img src={AddImage} alt="add-image" className="mr-3" />
              <p className="add-image">Add Image</p>
            </div>
          </div>
        </div>
        <MiniPost />
        <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-end">
          <Button text="Discard" onClick={action} className="btn-size-sm btn-no-bg mr-3" />
          <Button text="Post" className="btn-size-sm btn-disabled" />
        </div>
      </div>
    </div>
  );
};

const PostModal = ({ action }) => {
  return (
    <div className="post-modal">
      <div className="card flex items-start justify-between">
        <div className="left">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
        </div>
        <div className="right">
          <Post1 noImage={true} />
          <div className="vr3" />
          <div className="comment flex items-start">
            <div className="com-left flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                alt="pp"
              />
              <div className="vr2" style={{ height: "500px" }} />
            </div>
            <div className="com-right">
              <Comments image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
            </div>
          </div>
        </div>
      </div>
      <div className="exit" onClick={action}>
        <p>X</p>
      </div>
    </div>
  );
};

export function Screen2({ history }) {
  const { t } = useTranslation();
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  return (
    <>
      <Helmet>
        <title>Eyemark - Home</title>
      </Helmet>
      {showCommentModal ? <CommentModal action={() => setShowCommentModal(!showCommentModal)} /> : null}
      {showPostModal ? <PostModal action={() => setShowPostModal(!showPostModal)} /> : null}
      <div className="home-posts">
        <Post1 action={() => setShowCommentModal(!showCommentModal)} />
        <div className="vr" />
        <div className="comment flex items-start">
          <div className="com-left flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt="pp"
            />
            <div className="vr2" style={{ height: "500px" }} />
          </div>
          <div className="com-right">
            <Comments
              action={() => setShowPostModal(!showPostModal)}
              image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            />
          </div>
        </div>
        <div className="comment flex items-start">
          <div className="com-left flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2688&q=80"
              alt="pp"
            />
            <div className="vr2" style={{ height: "500px" }} />
          </div>
          <div className="com-right">
            <Comments image="https://images.unsplash.com/photo-1591588582259-e675bd2e6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen2;
