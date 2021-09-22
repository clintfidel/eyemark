import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { FilterIcon, DateSeperator, CompletedColor, AbandonedColor, Onhold, OngoingColor } from "assets/icons(svg)";
import "./style.scss";
import { SelectField } from "components";
import CustomBarchart from "modules/components/StackedBarchart";

const Screen3 = () => {
  return (
    <div className="overview">
      <div className="flex justify-between mb-5">
        <div className="flex">
          <p className="pl-3 pt-2 mda-welcome">Contractors/MDAs</p>
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
      <div className="mt-2">
        <p className="pl-3 pt-2 mda-welcome">Different statuses for Contractors/MDAs project</p>
        <hr />
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
        <SelectField label="Contractors" className="select-container mt-10" />
      </div>
      <CustomBarchart />
      <div className="mt-5">
        <p className="pl-3 pt-2 mda-welcome">Different statuses for Contractors/MDAs project</p>
        <hr />
      </div>
      <div className="flex a-card-cont mt-10">
        <div className="flex justify-between a-card px-4">
          <img className="" src={AbandonedColor} />
          <p className="a-card-text">EXCITED</p>
        </div>
        <div className="flex justify-between a-card px-4">
          <img className="" src={CompletedColor} />
          <p className="a-card-text">INDIFFERENT</p>
        </div>
        <div className="flex justify-between a-card px-4">
          <img className="" src={OngoingColor} />
          <p className="a-card-text">DISAPPOINTED</p>
        </div>
        <div className="flex justify-between a-card px-4">
          <img className="" src={Onhold} />
          <p className="a-card-text">SUSPICIOUS</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div />
        <SelectField label="Contractors" className="select-container mt-10" />
      </div>
      <CustomBarchart />
    </div>
  );
};
export default Screen3;
