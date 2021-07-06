import React from "react";
import "./style.scss";
import { JbLogo, ConstructionMan } from "assets/images(png)";
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

export default function Posts() {
  return (
    <div className="Posts">
      <div className="postWrapper">
        <div className="postContent">
          <div className="section5">
            <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
            <div className="name-Active">
              <h6 className="adedolapo">
                Adedolapo Ayitade <span className="p">is excited</span>
              </h6>
              <p className="h">12 hours ago</p>
            </div>
          </div>
          <div className="section6">
            <h6 className="strong">strongly satisfactory</h6>
            <p className="sgs">
              SGS INTRON assists our clients with any questions on the performance and <br />
              durability of road materials and products. To this end we offer a wide array of <br />
              services including testing, research and assessment...
            </p>
          </div>
          <div className="section7">
            <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
            {/* <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
            <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
            <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" /> */}
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
                  <p className="tran">
                    Transport and mobility are a key part of today’s society. Roads must be durable
                    <br />
                    and safe otherwise they present a danger to their users and the environment, as
                    <br />
                    well as increasing repair costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section11">
            <p className="view">View project</p>
          </div>

          <div className="postBottom">
            <div className="excited">are excited</div>
            <div className="suspect">suspect false information</div>
            <div className="comment">6</div>
            <div className="more">more</div>
          </div>
        </div>
      </div>
    </div>
  );
}
