import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  JbLogo,
  ConstructionMan,
  Darly,
  ProjectAvatar,
  EyeMark,
  Fayose,
  Frame1,
  Frame2,
  Frame3,
  Frame4
} from "assets/images(png)";
import { UpVote, DownVote, MoreIcon2, Comment } from "assets/icons(svg)";
import "./style.scss";

export function Screen1({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - Posts</title>
      </Helmet>
      <div className="profile-posts">
        <div className="postWrapper">
          <div className="postContent">
            <div className="section5">
              <img src={Darly} alt="Profile-Picture" className="postProfileImage" />
              <div className="name-Active">
                <h6 className="adedolapo">
                  Adedolapo Ayitade <span className="p">is excited 😆</span>
                </h6>
                <p className="h">12 hours ago</p>
              </div>
            </div>
            <div className="section6">
              <div className="hr"></div>
              <h6 className="strong">Strongly satisfactory</h6>
              <p className="sgs">
                SGS INTRON assists our clients with any questions on the performance and durability of road materials
                and products. To this end we offer a wide array of services including testing, research and
                assessment...
              </p>
            </div>
            <div className="section7">
              <img src={Frame1} alt="post-image" className="postImage" />
              <img src={Frame2} alt="post-image" className="postImage" />
              <img src={Frame3} alt="post-image" className="postImage" />
              <img src={Frame4} alt="post-image" className="postImage" />
              <img src={Frame3} alt="post-image" className="postImage" />
              {/* <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" /> */}
            </div>
            <div className="nav4">
              <div className="within">
                <div className="postTop">
                  <div className="postTop2">
                    <div className="postTopLeft">
                      <div className="section9">
                        <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
                      </div>
                      <div className="name">
                        <h2 className="berger"> Julius Berger Nigeria PLC</h2>
                        <p className="hour">16 hours ago</p>
                      </div>
                    </div>
                    <div className="circle2">
                      <p className="c">contractor</p>
                      <img src={ConstructionMan} alt="Profile-Picture" className="postProfileImage" />
                    </div>
                  </div>
                  <div className="section10">
                    <h4 className="prog">Construction Progress Report</h4>
                    <p className="reply">
                      Transport and mobility are a key part of today’s society. Roads must be durable and safe otherwise
                      they present a danger to their users and the environment, as well as increasing repair costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section11">
              <p className="view">VIEW PROJECT</p>
            </div>
            <div className="review ml-3 mt-10 mb-5">
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
        </div>
        <div className="postWrapper">
          <div className="postContent">
            <div className="postTop">
              <div className="postTop2">
                <div className="postTopLeft">
                  <div className="section5">
                    <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
                    <hr />
                    <div className="name-Active">
                      <h6 className="adedolapo">Julius Berger Nigeria Plc</h6>
                      <p className="h">12 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="circle2">
                  <p className="c">contractor</p>
                  <img src={ConstructionMan} alt="Profile-Picture" className="postProfileImage" />
                </div>
              </div>
            </div>
            <div className="section6">
              <div className="hr two"></div>
              <h6 className="strong">strongly satisfactory</h6>
              <p className="sgs">
                SGS INTRON assists our clients with any questions on the performance and durability of road materials
                and products. To this end we offer a wide array of services including testing, research and
                assessment...
              </p>
            </div>
            <div className="nav4">
              <div className="within">
                <div className="postTop">
                  <div className="postTop2 For9">
                    <div className="postTopLeft For9">
                      <div className="section9">
                        <img src={ProjectAvatar} alt="Profile-Picture" className="postProfileImage" />
                      </div>
                      <div className="name">
                        <h2 className="berger">Lagos-Ibadan Expressway Construction</h2>
                        <div className="flex mt-2 sub-text-1">
                          Started 3 years ago
                          <span className="text-status text-center mx-2">
                            <p className="text-status-text">STATUS</p>
                          </span>
                          <span className="text-status-2">ongoing</span>
                        </div>
                      </div>
                    </div>
                    <div className="circle2 proj">
                      <p className="c two">project</p>
                      <img src={EyeMark} alt="Profile-Picture" className="postProfileImage" />
                    </div>
                  </div>
                  <div className="section10">
                    <h4 className="prog">Update title on project</h4>
                    <div className="tran s">
                      <div className="set budget">
                        <span className="setSpan">BUDGET</span>
                        <h3>150BN</h3>
                      </div>

                      <div className="set state">
                        <span className="setSpan">STATE</span>
                        <h3>MULTIPLE</h3>
                      </div>

                      <div className="set sentiment">
                        <span className="setSpan">AVG. SENTIMENT</span>
                        <h3>😆 EXCITED</h3>
                      </div>
                      <button className="button">Unmarked</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section11">
              <p className="view">VIEW PROJECT</p>
            </div>

            <div className="review ml-3 mt-10 mb-5">
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
        </div>
      </div>
    </>
  );
}

export default Screen1;
