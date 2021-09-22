import React from "react";
import { Line } from "react-chartjs-2";
import { FilterIcon, DateSeperator, CompletedColor, AbandonedColor, Onhold, OngoingColor } from "assets/icons(svg)";
import "./style.scss";
import "../../style.scss";
import { SelectField } from "components";
import PieChart from "modules/components/PieChart";
import BarChart from "modules/components/BarChart";

const Screen2 = () => {
  return (
    <div className="overview">
      <div className="flex justify-between mb-5">
        <div className="flex">
          <p className="pl-3 pt-2 mda-welcome">Citizens</p>
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
      <div className="mb-3 mt-5">
        <p className="pl-3 pt-2 mda-welcome">User</p>
        <hr />
      </div>
      <PieChart />
      <PieChart className="mt-7" />
      <div className="mb-3 mt-5">
        <p className="pl-3 pt-2 mda-welcome">User Interests</p>
        <hr />
      </div>
      <div className="flex justify-between">
        <div />
        <SelectField label="state" className="select-container mt-10" />
      </div>
      <BarChart />
      <div className="mb-3 mt-5">
        <p className="pl-3 pt-2 mda-welcome">User Badge</p>
        <hr />
      </div>
      <PieChart />
      <div className="mb-3 mt-5">
        <p className="pl-3 pt-2 mda-welcome">The populace for each age range</p>
        <hr />
      </div>
      <div className="nav-content ph">
        <table>
          <thead>
            <td>#</td>
            <td>Location</td>
            <td>1 - 18</td>
            <td>18 - 24</td>
            <td>24 - 32</td>
            <td>32 - 48</td>
            <td>48 - 60</td>
            <td>60 - 84</td>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((t, index) => {
              return (
                <tr key={index} className="row">
                  <td>
                    <p>{index + 1}</p>
                  </td>
                  <td>
                    <p>Lagos</p>
                  </td>
                  <td>
                    <p>200 k</p>
                  </td>
                  <td>
                    <p>783</p>
                  </td>
                  <td>
                    <p>200 k</p>
                  </td>
                  <td>
                    <p>200 k</p>
                  </td>
                  <td>
                    <p>200 k</p>
                  </td>
                  <td>
                    <p>200 k</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Screen2;
