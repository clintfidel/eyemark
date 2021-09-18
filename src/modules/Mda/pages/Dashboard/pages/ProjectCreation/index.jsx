import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { Loading } from "components";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { createProjectRoutes, dashboardRoutes, modulesRoutes } from "routes/routes-list";
const Screen1 = React.lazy(() => import("./pages/Screen1"));
const Screen2 = React.lazy(() => import("./pages/Screen2"));
const Screen3 = React.lazy(() => import("./pages/Screen3"));
const Screen4 = React.lazy(() => import("./pages/Screen4"));
const Screen5 = React.lazy(() => import("./pages/Screen5"));
const Screen6 = React.lazy(() => import("./pages/Screen6"));

const CreateProject = () => {
  const { t } = useTranslation();
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="projects-container">
        <div className="navigation1 flex items-center justify-between">
          <p className="nav-text">{t("profile:Create New Project")}</p>
          <div className="flex justify-between w-30">
            <div className="invite-s py-1 px-6">
              <p className="invite-text-s">Saved</p>
            </div>
            <div className="invite py-1 px-6">
              <p className="invite-text">Publish</p>
            </div>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route
              path={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen1}`}
              render={props => <Screen1 {...props} />}
            />
            <Route
              path={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen2}`}
              render={props => <Screen2 {...props} />}
            />
            <Route
              path={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen3}`}
              render={props => <Screen3 {...props} />}
            />
            <Route
              path={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen4}`}
              render={props => <Screen4 {...props} />}
            />
            <Route
              path={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen5}`}
              render={props => <Screen5 {...props} />}
            />
            <Route
              path={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen6}`}
              render={props => <Screen6 {...props} />}
            />
            <Redirect to={`/mda/dashboard/${dashboardRoutes.createproject}/${createProjectRoutes.screen1}`} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};

export default CreateProject;
