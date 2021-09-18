import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { PostModal, Post1, Comments, CommentModal } from "modules/components";

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
