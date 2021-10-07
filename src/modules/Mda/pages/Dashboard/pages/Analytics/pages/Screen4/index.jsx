import { ProjectsIcon } from "assets/icons(svg)";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./style.scss";

export function Screen1() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex mt-4">
        <p className="pl-3 pt-2 mda-welcome">Surveys</p>
      </div>
      <div className="nav-content ph">
        <table>
          <thead>
            <td>#</td>
            <td>Name</td>
            <td>Project(s)</td>
            <td>Project Eyemarked</td>
            <td>Responses</td>
            <td>Verified Users</td>
            <td>Unverified Users</td>
            <td></td>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((t, index) => {
              return (
                <tr key={index} className="row">
                  <td>
                    <p>{index + 1}</p>
                  </td>
                  <td>Survey Questions</td>
                  <td>
                    <div className="flex items-center">
                      <img src={ProjectsIcon} alt="folder" className="mr-6" />
                      <p>300,000 Affordable Housing Units</p>
                    </div>
                  </td>
                  <td>
                    <p>783</p>
                  </td>
                  <td>
                    <p>783</p>
                  </td>
                  <td>
                    <p>783</p>
                  </td>
                  <td>
                    <p>783</p>
                  </td>
                  <td>
                    <NavLink className="" to="/mda/dashboard/analytics/survey-questions">
                      <span className="a-s-btn p-4">View</span>
                    </NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Screen1;
