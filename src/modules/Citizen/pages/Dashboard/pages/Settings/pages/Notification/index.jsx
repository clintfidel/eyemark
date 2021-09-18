import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import SETTINGSMOCK from "../../__mock__/settings";
const NotificationHome = React.lazy(() => import(`./pages/Home`));
import "./style.scss";

export function Account({ routeIndex }) {
  const { t } = useTranslation();
  let { path } = useRouteMatch();
  return (
    <>
      <Helmet>
        <title>Eyemark - {t("settings:Notification")}</title>
      </Helmet>
      <div className="settings-notifications">
        <Switch>
          <Route exact path={path} render={props => <NotificationHome {...props} routeIndex={routeIndex} />} />
          {SETTINGSMOCK[routeIndex].sub_settings.map((setting, i) => {
            const Screen = React.lazy(() => import(`./pages/${setting.component}`));
            return (
              <Route key={i} path={`${path}/${setting.route}`} render={props => <Screen {...props} routeIndex={i} />} />
            );
          })}
          <Redirect to={path} />
        </Switch>
      </div>
    </>
  );
}

export default Account;
