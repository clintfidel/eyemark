import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, NavLink, Redirect } from "react-router-dom";
import { Loading } from "components";
import { useTranslation } from "react-i18next";
import { projectRoutes } from "routes/routes-list";
import { Arrowback } from "assets/icons(svg)";

const Screen1 = React.lazy(() => import("./pages/Screen1"));
const Screen2 = React.lazy(() => import("./pages/Screen2"));
const Screen3 = React.lazy(() => import("./pages/Screen3"));
const Screen4 = React.lazy(() => import("./pages/Screen4"));
const Screen5 = React.lazy(() => import("./pages/Screen5"));
import "./style.scss";

const Project = () => {
  const { t } = useTranslation();
  let { path, url } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="project-container">
        <NavLink to="/mda/dashboard/overview">
          <div className="navigation1 flex items-center">
            <img className="mr-5" src={Arrowback} />
            <p className="nav-text">{t("profile:Project")}</p>
          </div>
        </NavLink>
        <div className="content">
          <div className="breadcrumbs">
            <p>
              Categories &gt; Sector &gt; Housing &gt; <b>300,000 Affordable Housing Units</b>
            </p>
          </div>
          <div className="nav-contents w-full">
            <div className="navigation2">
              <NavLink to={`${url}/${projectRoutes.screen1}`} className="nav" activeClassName="nav-active">
                <p>Overview</p>
              </NavLink>
              <NavLink to={`${url}/${projectRoutes.screen2}`} className="nav" activeClassName="nav-active">
                <p>Plan (ToC)</p>
              </NavLink>
              <NavLink to={`${url}/${projectRoutes.screen3}`} className="nav" activeClassName="nav-active">
                <p>Activity</p>
              </NavLink>
              <NavLink to={`${url}/${projectRoutes.screen4}`} className="nav" activeClassName="nav-active">
                <p>Media</p>
              </NavLink>
              <NavLink to={`${url}/${projectRoutes.screen5}`} className="nav" activeClassName="nav-active">
                <p>Reviews</p>
              </NavLink>
              <NavLink to="/surveys" onClick={e => e.preventDefault()} className="nav" activeClassName="nav-active">
                <p>Surveys</p>
              </NavLink>
            </div>
          </div>
          <div className="border-divider" />
          <Switch>
            <Route path={`${path}/${projectRoutes.screen1}`} render={props => <Screen1 {...props} />} />
            <Route path={`${path}/${projectRoutes.screen2}`} render={props => <Screen2 {...props} />} />
            <Route path={`${path}/${projectRoutes.screen3}`} render={props => <Screen3 {...props} />} />
            <Route path={`${path}/${projectRoutes.screen4}`} render={props => <Screen4 {...props} />} />
            <Route path={`${path}/${projectRoutes.screen5}`} render={props => <Screen5 {...props} />} />
            <Redirect to={`${path}/${projectRoutes.screen1}`} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};
export default Project;
