import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  SidebarLogo,
  CollapseIcon,
  MoreIcon,
  LadyImg,
  HomeIcon,
  FolderIcon,
  CategoryIcon,
  NotificationIcon,
  EyemarkedIcon,
  ProfileIcon,
  SettingsIcon,
  BadgeIcon,
  Person,
  SearchIcon
} from "assets/icons(svg)";
import "./style.scss";

export function Screen1() {
  const [clickBtn2, setClickBtn2] = useState(false);
  const toggleBtn2 = () => {
    if (clickBtn2) {
      setClickBtn2(false);
    } else {
      setClickBtn2(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Eyemark - User Profile</title>
      </Helmet>
      <div className="contents">
        <div className="sidebar">
          <div className="top-bar">
            <div className="logo">
              <img src={SidebarLogo} />
            </div>
            <div className="collapse-icon">
              <img src={CollapseIcon} />
            </div>
          </div>
          <div className="top-bar-2">
            <div className="section1">
              <img src={LadyImg} />
            </div>

            <div className="section-2">
              <div className="name-sect">
                <h2 className="name">Deborah Olabanji</h2>
                <p className="username">@debbie_more</p>
              </div>
              <div className="more-icon">
                <img src={MoreIcon} />
              </div>
            </div>
          </div>
          <div className="horizontal-line">
            <hr />
          </div>
          <div className="list-items">
            <ul>
              <li className="flex">
                <img src={HomeIcon} />
                <a href="#">Home</a>
              </li>
              <li className="flex">
                <img src={FolderIcon} />
                <a href="#">Project</a>
              </li>
              <li className="flex">
                <img src={CategoryIcon} />
                <a href="#">Categories</a>
              </li>
              <li className="flex">
                <img src={NotificationIcon} />
                <a href="#">Notifications </a>
              </li>
              <li className="flex">
                <img src={EyemarkedIcon} />
                <a href="#">Eyemarked</a>
              </li>
              <li className="flex">
                <img src={ProfileIcon} />
                <a href="#">Profile</a>
              </li>
              <li className="flex">
                <img src={SettingsIcon} />
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>

          <div className="horizontal-line2">
            <hr />
          </div>
          <div className="list-items2">
            <ul>
              <li>
                <a href="#" id="active">
                  English
                </a>
              </li>
              <li>
                <a href="#">Igbo</a>
              </li>
              <li>
                <a href="#">Yoruba</a>
              </li>
              <li>
                <a href="#">Hausa</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mainContents">hello</div>
        <div className="sidebar2">
          <div className="input-icons">
            {/* <img src={SearchIcon} className="input-img" /> */}
            <input className="input-field" type="text" placeholder="search your profile" />
          </div>
          <div className="img">
            <img src={LadyImg} />
          </div>
          <div className="name2">
            <h6 className="name">Deborah olabanji</h6>
            <p className="username mt-3">@debbie_more</p>
          </div>
          <div className="box">
            <h5 className="box-text">Review</h5>
            <h5 className="box-text">Eyemarked</h5>
            <h5 className="box-text">Badge</h5>
          </div>
          <div className="box2">
            <h4 className="box2-text">85</h4>
            <h3 className="box2-text-1">122</h3>
            <img src={BadgeIcon} />
          </div>
          <div className="text">
            <p className="text-p">
              I do not do labels. I am me. I say it as it is. My mum says in my court nobody wins. You either love me or
              hate me and either one
              <br />
              is perfectly okay
            </p>
          </div>
          <div className="horizontal-line3">
            <hr />
          </div>
          <div className="heading">
            <h4>Follow suggestion</h4>
          </div>
          <div>
            <div className="flex mx-6 mb-6 justify-between">
              <div className="flex">
                <img className="mr-5" src={Person} />
                <div className="">
                  <div className="flex">
                    <p className="first-text font-bolder">Bankole ‘Banky W’...</p>
                  </div>
                  <p className="flex mt-2 sub-text-user">@bank_w</p>
                </div>
              </div>
              <button
                onClick={toggleBtn2}
                className={`follow-button border-dashed ${clickBtn2 ? "follow-button-click" : "follow-button"}`}
              >
                {clickBtn2 ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
          <div className="horizontal-line4">
            <hr />
          </div>
          <div className="copyright">
            <p> Eyemark &copy; 2021. All right reserved. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen1;
