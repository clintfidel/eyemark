import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { JbLogo, ConstructionMan, Darly, Fayose } from "assets/images(png)";
import { UpVote, DownVote, MoreIcon2, DocIcon } from "assets/icons(svg)";
import "./style.scss";

export function Screen6({ history }) {
  const { t } = useTranslation();
  const [clickBtn, setClickBtn] = useState(false);
  const toggleBtn = () => {
    if (clickBtn) {
      setClickBtn(false);
    } else {
      setClickBtn(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Eyemark - Following</title>
      </Helmet>
      <div className="profile-posts">
        <div className="postWrapper">
          <div className="postContent">
            <div className="section5">
              <img src={Darly} alt="Profile-Picture" className="postProfileImage-s" />
              <div className="name-Active">
                <h6 className="adedolapo">
                  Adedolapo Ayitade <span className="p">is excited 😆</span>
                </h6>
                <p className="h mt-2">12 hours ago</p>
              </div>
            </div>
            <div className="section6">
              <div className="hr-s"></div>
            </div>
            <div className="nav4">
              <div className="within">
                <div className="postTop">
                  <div className="postTop2">
                    <div className="postTopLeft">
                      <div className="section9">
                        <img src={JbLogo} alt="Profile-Picture" className="postProfileImage-s" />
                      </div>
                      <div className="name">
                        <h2 className="berger font-bold"> Julius Berger Nigeria PLC</h2>
                        <p className="hour mt-1">16 hours ago</p>
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
              <p className="view">View project</p>
              <div className="survey-btn">
                <p className="survey-t mr-2">Fill Survey</p>
                <img src={DocIcon} />
              </div>
            </div>
            <div className="postBottom">
              <div className="excited">
                <img src={UpVote} alt="like" />
                <div className="expImageContainer">
                  <img src={Darly} alt="Profile-Picture" className="expImage" />
                  <img src={Fayose} alt="Profile-Picture" className="expImage" />
                  <img src={Darly} alt="Profile-Picture" className="expImage" />
                  <img src={Fayose} alt="Profile-Picture" className="expImage" />
                </div>
                <div className="rateUnit">24</div>
              </div>
              <div className="suspect">
                <img src={DownVote} alt="dislike" />
                <div className="expImageContainer">
                  <img src={Darly} alt="Profile-Picture" className="expImage" />
                  <img src={Fayose} alt="Profile-Picture" className="expImage" />
                  <img src={Darly} alt="Profile-Picture" className="expImage" />
                  <img src={Fayose} alt="Profile-Picture" className="expImage" />
                </div>
                <div className="rateUnit">4</div>
              </div>
              <div className="more">
                <img src={MoreIcon2} alt="morelike" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen6;
