import React from "react";
import { Line } from "react-chartjs-2";
import { FilterIcon, DateSeperator, CompletedColor, AbandonedColor, Onhold, OngoingColor } from "assets/icons(svg)";
import "./style.scss";
import "../../style.scss";
import { SelectField } from "components";
import CustomBarchart from "modules/components/StackedBarchart";
import BarChart from "modules/components/BarChart";

const Screen1 = () => {
  return (
    <div className="overview">
      <div className="flex justify-between mb-5">
        <div className="flex">
          <p className="pl-3 pt-2 mda-welcome">Projects</p>
        </div>
        <div className="flex">
          <div className="date">
            <img className="mr-3" src={FilterIcon} />
            <p className="date-text">28 June 2021</p>
          </div>
          <img src={DateSeperator} className="mx-5" />
          <div className="date">
            <img className="mr-3" src={FilterIcon} />
            <p className="date-text">28 June 2021</p>
          </div>
        </div>
      </div>
      <div className="flex a-card-cont mt-10">
        <div className="flex justify-between a-card px-4">
          <img className="" src={AbandonedColor} />
          <p className="a-card-text">ABANDONED</p>
        </div>
        <div className="flex justify-between a-card px-4">
          <img className="" src={CompletedColor} />
          <p className="a-card-text">COMPLETED</p>
        </div>
        <div className="flex justify-between a-card px-4">
          <img className="" src={OngoingColor} />
          <p className="a-card-text">ONGOING</p>
        </div>
        <div className="flex justify-between a-card px-4">
          <img className="" src={Onhold} />
          <p className="a-card-text">ON-HOLD</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div />
        <SelectField label="state" className="select-container mt-10" />
      </div>
      <CustomBarchart />
      <div className="mb-3 mt-5">
        <p className="pl-3 pt-2 mda-welcome">Budget</p>
        <hr />
      </div>
      <div className="flex justify-between mb-3">
        <div />
        <SelectField label="state" className="select-container mt-10" />
      </div>
      <BarChart />
    </div>
  );
};
export default Screen1;
