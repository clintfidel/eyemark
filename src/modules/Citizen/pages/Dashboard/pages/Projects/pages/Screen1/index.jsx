import { ProjectsIcon } from "assets/icons(svg)";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./style.scss";

export function Screen1({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Eyemark - Projects</title>
      </Helmet>
      <div className="nav-content ph">
        <table>
          <thead>
            <td>#</td>
            <td>Name</td>
            <td>Location(s)</td>
            <td>Supervising Ministry</td>
            <td>Budget</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Status</td>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((t, index) => {
              return (
                <tr
                  onClick={() => history.push(`/citizen/dashboard/single/overview`)}
                  key={index}
                  className={index % 2 === 0 ? "row-active" : "row"}
                >
                  <td>
                    <p>{index + 1}</p>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <img src={ProjectsIcon} alt="folder" className="mr-6" />
                      <p>300,000 Affordable Housing Units</p>
                    </div>
                  </td>
                  <td>
                    <p>56</p>
                  </td>
                  <td>
                    <p>Ministry of Works and...</p>
                  </td>
                  <td>
                    <p>100M</p>
                  </td>
                  <td>
                    <p>Dec 2010</p>
                  </td>
                  <td>
                    <p>Aug 2020</p>
                  </td>
                  <td>
                    <span className={index % 2 === 0 ? "completed" : ""}>Ongoing</span>
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
