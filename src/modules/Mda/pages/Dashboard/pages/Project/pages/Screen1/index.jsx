import {
  FHA,
  Info,
  Timeline,
  Budget,
  Budget2,
  Budget3,
  Budget4,
  StartDate,
  EndDate,
  SDGSPoverty,
  SDGSHunger,
  SDGSHealth,
  SDGSEducation,
  SDGSEquality,
  SDGSWater,
  SDGSEnergy,
  Star,
  Circle
} from "assets/icons(svg)";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.scss";
import { JbLogo } from "assets/images(png)";
import { Post1 } from "modules/components";

const TimelineCard = ({}) => {
  return (
    <div className="mr-3 timeline flex-shrink-0">
      <img src={Star} alt="star" className="mb-2" />
      <p className="label-1 mb-6">30 May 2021</p>
      <div className="project-card t-card">
        <p className="label-2 mb-12" style={{ color: "#989898" }}>
          Timeline title 1
        </p>
        <p className="text mb-10">
          Suspendisse molestie volutpat non dis cursus. Gravida semper at ultrices dolor. In felis nibh ut erat. Duis in
          mi magnis nascetur commodo sagittis. Diam adipiscing commodo malesuada euismod.{" "}
        </p>
        <div className="flex items-start">
          <div className="mr-9">
            <p className="completed mb-1">Completed</p>
            <p className="label-2">Status</p>
          </div>
          <div className="mr-9">
            <p className="completed mb-1" style={{ color: "#252117" }}>
              29th May 2021
            </p>
            <p className="label-2">DATE COMPLETED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Screen1({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - Project overview</title>
      </Helmet>
      <div className="nav-content">
        <div className="flex items-start justify-between mb-7 ph">
          <div style={{ width: "75%" }}>
            <p className="housing-units">300,000 Affordable Housing Units</p>
            <div>
              <p className="label-1 mb-2">SUPERVISING MDA</p>
              <div className="flex items-center">
                <img src={FHA} alt="fha" className="mr-2" />
                <p className="fha-txt mr-1">Federal Housing Authority (FHA)</p>
                <img src={Info} alt="info" />
              </div>
            </div>
          </div>
          <div style={{ width: "25%" }}>
            <div className="project-card states">
              <div className="flex items-center mb-5">
                <p className="state-txt mr-1">Anambra</p>
                <p className="state-more-txt">& 35 more</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="label-2">STATES</p>
                <p className="see-all">See All</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between mb-7 ph">
          <div style={{ width: "49.5%" }}>
            <div className="project-card ongoing mb-2 flex items-center justify-between">
              <div style={{ width: "50%", height: "100%" }} className="flex flex-col justify-between">
                <div>
                  <p className="project-title">Excavation</p>
                  <p className="milestone">Current Milestone</p>
                </div>
                <div>
                  <p className="progress">Ongoing</p>
                  <p className="label-1">PROJECT STATUS</p>
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <CircularProgressbarWithChildren value={62} strokeWidth={6}>
                  <p className="percentage">{62}%</p>
                  <p className="active">Active</p>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className="flex items-start justify-between mb-2">
              <div style={{ width: "49%" }}>
                <div className="project-card others">
                  <img src={Budget2} alt="budget" className="mb-6" />
                  <p className="value-1">NGN 10.77B</p>
                  <p className="label-2">AMOUNT RELEASED</p>
                </div>
              </div>
              <div style={{ width: "49%" }}>
                <div className="project-card others">
                  <img src={Budget3} alt="budget" className="mb-6" />
                  <p className="value-1">NGN 10.77B</p>
                  <p className="label-2">AMOUNT MOBILIZED</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "49.5%" }}>
            <div className="flex items-start justify-between mb-2">
              <div style={{ width: "49%" }}>
                <div className="project-card others">
                  <img src={Budget} alt="budget" className="mb-6" />
                  <p className="value-1">NGN 10.77B</p>
                  <p className="label-2">PROJECT BUDGET</p>
                </div>
              </div>
              <div style={{ width: "49%" }}>
                <div className="project-card others">
                  <img src={Timeline} alt="budget" className="mb-6" />
                  <p className="value-1">10 Years</p>
                  <p className="label-2">PROJECT TIMELINE</p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between mb-2">
              <div style={{ width: "49%" }}>
                <div className="project-card others">
                  <img src={StartDate} alt="budget" className="mb-6" />
                  <p className="value-1">10 DEC 2010</p>
                  <p className="label-2">START DATE</p>
                </div>
              </div>
              <div style={{ width: "49%" }}>
                <div className="project-card others">
                  <img src={EndDate} alt="budget" className="mb-6" />
                  <p className="value-1">12 OCT 2021</p>
                  <p className="label-2">END DATE</p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between mb-2">
              <div style={{ width: "49%" }}>
                <div className="project-card others">
                  <img src={Budget4} alt="budget" className="mb-6" />
                  <p className="value-1">NGN 10.77B</p>
                  <p className="label-2">AMOUNT UTILIZED</p>
                </div>
              </div>
              <div style={{ width: "49%" }}>
                <div className="project-card others">
                  <div className="mb-6" style={{ width: 32, height: 32 }} />
                  <p className="value-1">None</p>
                  <p className="label-2">CHILD(REN) PROJECT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="content-title mb-5 ph">Ministry(s)</p>
        <div className="flex items-center mb-12 ministrys">
          <div className="project-card ministry flex items-center justify-center flex-shrink-0">
            <p>Ministry of Housing</p>
          </div>
          <div className="project-card ministry flex items-center justify-center flex-shrink-0">
            <p>Ministry of Budget</p>
          </div>
          <div className="project-card ministry flex items-center justify-center flex-shrink-0">
            <p>Ministry of Enivronment</p>
          </div>
          <div className="project-card ministry flex items-center justify-center flex-shrink-0">
            <p>Ministry of Wellbeing</p>
          </div>
        </div>
        <p className="content-title mb-5 ph">Contractors</p>
        <div className="flex items-center mb-12 ph">
          <img src={JbLogo} alt="logo" className="mr-5" />
          <img src={JbLogo} alt="logo" className="mr-5" />
          <img src={JbLogo} alt="logo" className="mr-5" />
          <img src={JbLogo} alt="logo" className="mr-5" />
        </div>
        <p className="content-title mb-5 ph">SDGs</p>
        <p className="content-subtitle mb-5 ph">Suspendisse molestie volutpat non dis cursus.</p>
        <div className="flex items-center mb-12 flex-wrap ph">
          <div className="flex one-sdg items-center mr-3 mb-3">
            <img src={SDGSPoverty} alt="No Poverty" />
            <p>No Poverty</p>
          </div>
          <div className="flex one-sdg items-center mr-3 mb-3" style={{ backgroundColor: "#DDA739" }}>
            <img src={SDGSHunger} alt="Zero Hunger" />
            <p>Zero Hunger</p>
          </div>
          <div className="flex one-sdg items-center mr-3 mb-3" style={{ backgroundColor: "#4BA145" }}>
            <img src={SDGSHealth} alt="Good Health and Well-Being" />
            <p>Good Health and Well-Being</p>
          </div>
          <div className="flex one-sdg items-center mr-3 mb-3">
            <img src={SDGSEducation} alt="Quality Education" />
            <p>Quality Education</p>
          </div>
          <div className="flex one-sdg items-center mr-3 mb-3" style={{ backgroundColor: "#EE402B" }}>
            <img src={SDGSEquality} alt="Gender Equality" />
            <p>Gender Equality</p>
          </div>
          <div className="flex one-sdg items-center mr-3 mb-3" style={{ backgroundColor: "#29BFE6" }}>
            <img src={SDGSWater} alt="Clean Water" />
            <p>Clean Water</p>
          </div>
          <div className="flex one-sdg items-center mr-3 mb-3" style={{ backgroundColor: "#FAC40F" }}>
            <img src={SDGSEnergy} alt="Affordable and Clean Energy" />
            <p>Affordable and Clean Energy</p>
          </div>
        </div>
        <p className="content-title mb-5 ph">Project Description</p>
        <p className="content-text mb-12 ph">
          Suspendisse molestie volutpat non dis cursus. Gravida semper at ultrices dolor. In felis nibh ut erat. Duis in
          mi magnis nascetur commodo sagittis. Diam adipiscing commodo malesuada euismod. Suspendisse molestie volutpat
          non dis cursus. Gravida semper at ultrices dolor. In felis nibh ut erat. Duis in mi magnis nascetur commodo
          sagittis. Diam adipiscing commodo malesuada euismod.
        </p>
        <div className="flex items-center mb-5 justify-between ph">
          <p className="content-title">Plan (ToC)</p>
          <p className="label-2">SEE DETAILS</p>
        </div>
        <p className="content-subtitle mb-5 ph">Suspendisse molestie volutpat non dis cursus.</p>
        <p className="content-text mb-12 ph">
          Suspendisse molestie volutpat non dis cursus. Gravida semper at ultrices dolor. In felis nibh ut erat. Duis in
          mi magnis nascetur commodo sagittis. Diam adipiscing commodo malesuada euismod. Suspendisse molestie volutpat
          non dis cursus. Gravida semper at ultrices dolor. In felis nibh ut erat. Duis in mi magnis nascetur commodo
          sagittis. Diam adipiscing commodo malesuada euismod.
        </p>
        <p className="content-title mb-5 ph">Proposed Timeline</p>
        <p className="content-subtitle mb-5 ph">Suspendisse molestie volutpat non dis cursus.</p>
        <div className="flex items-start mb-12 timelines">
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
        </div>
        <div className="flex items-center mb-5 justify-between ph">
          <p className="content-title">Project Updates</p>
          <p className="label-2">SEE ALL</p>
        </div>
        <div className="flex project">
          <div style={{ width: "564px" }} className="mr-2 flex-shrink-0">
            <Post1 />
          </div>
          <div style={{ width: "564px" }} className="mr-2 flex-shrink-0">
            <Post1 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen1;
