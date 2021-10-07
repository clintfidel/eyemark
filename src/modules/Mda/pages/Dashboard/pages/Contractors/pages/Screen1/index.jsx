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
            <td className="w-3/12 sm:w-1/12 flex-shrink-0">Project(s)</td>
            <td className="w-4/12 sm:w-2/12 flex-shrink-0">Email</td>
            <td className="w-2/12 sm:w-1/12 flex-shrink-0">End Date</td>
            <td className="w-3/12 sm:w-2/12 flex-shrink-0 text-center">
              Eyemarked <br className="xl:hidden" /> Projects
            </td>
            <td className="w-4/12 flex-shrink-0">Status</td>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((t, index) => {
              return (
                <tr
                  onClick={() => history.push(`mda/dashboard/project`)}
                  key={index}
                  className="flex justify-between items-center row"
                >
                  <td className="w-1/12 lg:w-auto flex-shrink-0 lg:mr-2">
                    <p>{index + 1}</p>
                  </td>
                  <td className="w-11/12 sm:w-5/12 lg:w-4/12 flex-shrink-0">
                    <div className="flex items-center ">
                      <img src={ProjectsIcon} alt="folder" className="mr-6" />
                      <p>300,000 Affordable Housing Units</p>
                    </div>
                  </td>
                  <td className="w-3/12 sm:w-1/12 flex-shrink-0">
                    <p>56</p>
                  </td>
                  <td className="w-4/12 sm:w-2/12 flex-shrink-0">
                    <p>clint@gmail.com</p>
                  </td>
                  <td className="w-2/12 sm:w-1/12 flex-shrink-0">
                    <p>Dec 2010</p>
                  </td>
                  <td className="w-3/12 sm:w-2/12 flex-shrink-0 justify-self-center ">
                    <p className="text-center">20</p>
                  </td>
                  <td className="w-4/12 flex-shrink-0">
                    <span className={index % 2 === 0 ? "completed" : ""}>
                      {index % 2 === 0 ? "Accepted" : "Pending"}
                    </span>
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
