import React from "react";
import "./style.scss";
import { JbLogo, ConstructionMan, Darly, ProjectAvatar, EyeMark } from "assets/images(png)";
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
  Settings,
  UpVote,
  DownVote,
  MoreIcon2,
  SmallImg1,
  SmallImg2,
  SmallImg4,
  SmallImg5,
  SmallImg6,
  SmallImg7,
  SmallImg8,
  SmallImg9,
  SmallImg10,
  SmallImg11,
  BigImage
} from "assets/icons(svg)";

export default function Posts() {
  return (
    <div className="Posts">
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
            <h6 className="strong">strongly satisfactory</h6>
            <p className="sgs">
              SGS INTRON assists our clients with any questions on the performance and <br />
              durability of road materials and products. To this end we offer a wide array of <br />
              services including testing, research and assessment...
            </p>
          </div>
          <div className="section7">
            <img src={SmallImg1} alt="Profile-Picture" className="postProfileImage" />
            <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
            <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
            <img src={JbLogo} alt="Profile-Picture" className="postProfileImage" />
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
            <div className="excited">
              <img src={UpVote} alt="like" />
              <div className="expImageContainer">
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
              </div>
              <div className="rateUnit">24</div>
            </div>
            <div className="suspect">
              <img src={DownVote} alt="dislike" />
              <div className="expImageContainer">
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
              </div>
              <div className="rateUnit">4</div>
            </div>
            <div className="more">
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
              SGS INTRON assists our clients with any questions on the performance and <br />
              durability of road materials and products. To this end we offer a wide array of <br />
              services including testing, research and assessment...
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
                      <p className="hour">
                        started 3 years ago <span className="lag">LAGOS - IBADAN.</span>
                        <span className="stat">status</span> <span className="on">ONGOING</span>
                      </p>
                    </div>
                  </div>
                  <div className="circle2">
                    <p className="c two">project</p>
                    <img src={EyeMark} alt="Profile-Picture" className="postProfileImage" />
                  </div>
                </div>
                <div className="section10">
                  <h4 className="prog">Update title on project</h4>
                  <p className="tran s">
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
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section11">
            <p className="view">View project</p>
          </div>

          <div className="postBottom">
            <div className="excited">
              <img src={UpVote} alt="like" />
              <div className="expImageContainer">
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
              </div>
              <div className="rateUnit">24</div>
            </div>
            <div className="suspect">
              <img src={DownVote} alt="dislike" />
              <div className="expImageContainer">
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
                <img src={Darly} alt="Profile-Picture" className="expImage" />
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
  );
}
