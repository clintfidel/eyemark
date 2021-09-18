import React from "react";
import { UpVote, DownVote, MoreIcon2 } from "assets/icons(svg)";
import Button from "components/Button";
import { Emoji } from "assets/icons(svg)";
import { ArrowDown } from "assets/icons(svg)";
import Input from "components/Input";
import Textarea from "components/Textarea";
import { AddImage } from "assets/icons(svg)";
import { Post2 } from "modules/components";
import "./style.scss";

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
      {image ? <img src={image} alt="post-image" className="post-image" /> : null}
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
        <Post2 />
        <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-end">
          <Button text="Discard" onClick={action} className="btn-size-sm btn-no-bg mr-3" />
          <Button text="Post" className="btn-size-sm btn-disabled" />
        </div>
      </div>
    </div>
  );
};

export { Comments, CommentModal };
