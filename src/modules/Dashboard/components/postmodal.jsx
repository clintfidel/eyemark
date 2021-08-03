import React from "react";
import { Post1, Comments } from "modules/Dashboard/components";
import "./style.scss";

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

export default PostModal;
