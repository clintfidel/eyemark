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
          <thead className="flex justify-between items-center">
            <td className="w-1/12 lg:w-auto flex-shrink-0 lg:mr-2">#</td>
            <td className="w-11/12 sm:w-5/12 lg:w-4/12 flex-shrink-0">Name</td>
            <td className="w-3/12 sm:w-1/12 flex-shrink-0">Location(s)</td>
            <td className="w-4/12 sm:w-2/12 flex-shrink-0 sm:text-center sm:mr-2">Supervising Ministry</td>
            <td className="w-2/12 sm:w-1/12 flex-shrink-0 sm:mr-2">Budget</td>
            <td className="w-2/12 sm:w-1/12 flex-shrink-0 sm:text-center sm:mr-2">Start Date</td>
            <td className="w-2/12 sm:w-1/12 flex-shrink-0 sm:text-center sm:mr-2">End Date</td>
            <td className="w-32 flex-shrink-0">Status</td>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((t, index) => {
              return (
                <tr
                  onClick={() => history.push(`/mda/dashboard/single/overview`)}
                  key={index}
                  className={index % 2 === 0 ? "row-activ" : "row"}
                >
                  <td className="w-1/12 lg:w-auto flex-shrink-0 lg:mr-2">
                    <p>{index + 1}</p>
                  </td>
                  <td className="w-11/12 sm:w-5/12 lg:w-4/12 flex-shrink-0">
                    <div className="flex items-center">
                      <img src={ProjectsIcon} alt="folder" className="mr-2" />
                      <p>300,000 Affordable Housing Units</p>
                    </div>
                  </td>
                  <td className="w-3/12 sm:w-1/12 flex-shrink-0">
                    <p>56</p>
                  </td>
                  <td className="w-4/12 sm:w-2/12 flex-shrink-0 sm:mr-2">
                    <p className="truncate">Ministry of Works and...</p>
                  </td>
                  <td className="w-2/12 sm:w-1/12 flex-shrink-0 sm:mr-2">
                    <p>100M</p>
                  </td>
                  <td className="w-2/12 sm:w-1/12 flex-shrink-0 sm:mr-2">
                    <p className="sm:text-center">Dec 2010</p>
                  </td>
                  <td className="w-2/12 sm:w-1/12 flex-shrink-0 sm:mr-2">
                    <p className="sm:text-center">Aug 2020</p>
                  </td>
                  <td className="w-32 flex-shrink-0">
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
