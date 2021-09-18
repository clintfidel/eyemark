import React, { Suspense, useState } from "react";
import { Switch, Route, useRouteMatch, NavLink, Redirect } from "react-router-dom";
import { Loading } from "components";
import { InviteModal } from "modules/components";
import { useTranslation } from "react-i18next";
import { projectsRoutes } from "routes/routes-list";
import { Filter } from "assets/icons(svg)";

const Screen1 = React.lazy(() => import("./pages/Screen1"));
import "./style.scss";

const Projects = () => {
  const { t } = useTranslation();
  let { path, url } = useRouteMatch();
  const [showFilter, setShowFilter] = useState(false);
  const [showContractors, setShowContractors] = useState(false);
  return (
    <Suspense fallback={<Loading />}>
      <div className="projects-container">
        <div className="navigation1 flex justify-between items-center">
          <p className="nav-text">{t("profile:Projects")}</p>
          <div onClick={() => setShowContractors(!showContractors)} className="invite-c">
            <p className="invite-text-c">Invite</p>
          </div>
          {showContractors ? <InviteModal action={() => setShowContractors(!showContractors)} /> : null}
        </div>
        <div className="content">
          <div className="nav-contents w-full">
            <div className="navigation2">
              <div className="flex items-end justify-start">
                <NavLink to={`${url}/${projectsRoutes.screen1}`} className="nav" activeClassName="nav-active">
                  <p>All</p>
                </NavLink>
                <NavLink
                  to={`${url}/${projectsRoutes.screen2}`}
                  onClick={e => e.preventDefault()}
                  className="nav"
                  activeClassName="nav-active"
                >
                  <p>Ongoing</p>
                </NavLink>
                <NavLink
                  to={`${url}/${projectsRoutes.screen3}`}
                  onClick={e => e.preventDefault()}
                  className="nav"
                  activeClassName="nav-active"
                >
                  <p>Completed</p>
                </NavLink>
              </div>
              <div className="filters flex items-center justify-between" onClick={() => setShowFilter(!showFilter)}>
                <img src={Filter} alt="filter" />
                <p>{t("categories:Filter")}</p>
              </div>
              {showFilter ? (
                <div className="filter-box">
                  <div className="flex items-center filter">
                    <input type="checkbox" className="mr-2" />
                    <p>text</p>
                  </div>
                  <div className="budget">
                    <p>{t("categories:Budget")} - NGN</p>
                    <input type="range" className="range" />
                    <div className="inputs flex items-center justify-between">
                      <input placeholder="500,000" />
                      -
                      <input placeholder="500,000,000" />
                    </div>
                  </div>
                  <div className="buttons flex items-center justify-between">
                    <button className="clear">{t("categories:Clear all")}</button>
                    <button className="apply">{t("categories:Apply")}</button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="border-divider" />
          <Switch>
            <Route path={`${path}/${projectsRoutes.screen1}`} render={props => <Screen1 {...props} />} />
            <Redirect to={`${path}/${projectsRoutes.screen1}`} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};
export default Projects;
