import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { Loading } from "components";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { analyticsRoutes, dashboardRoutes } from "routes/routes-list";
const Screen1 = React.lazy(() => import("./pages/Screen1"));
const Screen2 = React.lazy(() => import("./pages/Screen2"));
const Screen3 = React.lazy(() => import("./pages/Screen3"));
const Screen4 = React.lazy(() => import("./pages/Screen4"));

const Analytics = () => {
  const { t } = useTranslation();
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="projects-container">
        <div className="navigation1 flex items-center justify-between">
          <p className="nav-text">{t("profile:Analytics")}</p>
        </div>
        <div className="content">
          <Switch>
            <Route
              path={`/mda/dashboard/${dashboardRoutes.analytics}/${analyticsRoutes.screen1}`}
              render={props => <Screen1 {...props} />}
            />
            <Route
              path={`/mda/dashboard/${dashboardRoutes.analytics}/${analyticsRoutes.screen2}`}
              render={props => <Screen2 {...props} />}
            />
            <Route
              path={`/mda/dashboard/${dashboardRoutes.analytics}/${analyticsRoutes.screen3}`}
              render={props => <Screen3 {...props} />}
            />
            <Route
              path={`/mda/dashboard/${dashboardRoutes.analytics}/${analyticsRoutes.screen4}`}
              render={props => <Screen4 {...props} />}
            />
            <Redirect to={`/mda/dashboard/${dashboardRoutes.analytics}/${analyticsRoutes.screen1}`} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};

export default Analytics;
