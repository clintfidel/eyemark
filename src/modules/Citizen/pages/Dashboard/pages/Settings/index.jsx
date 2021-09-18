import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, Redirect, NavLink } from "react-router-dom";
import { Loading } from "components";
import SETTINGSMOCK from "./__mock__/settings";
import "./style.scss";
import { ChevronRight } from "assets/icons(svg)";

const Settings = () => {
  let { path, url } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="settings-container flex">
        <div className="settings-sidebar">
          <div className="top flex items-center">
            <p className="title">Settings</p>
          </div>
          <div className="navs">
            {SETTINGSMOCK.map((setting, i) => {
              return (
                <NavLink key={i} to={`${url}/${setting.route}`} className="nav" activeClassName="nav-active">
                  <p>{setting.name}</p>
                  <img src={ChevronRight} />
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="settings-content">
          <Switch>
            {SETTINGSMOCK.map((setting, i) => {
              const Screen = React.lazy(() => import(`./pages/${setting.component}`));
              return (
                <Route
                  key={i}
                  path={`${path}/${setting.route}`}
                  render={props => <Screen {...props} routeIndex={i} />}
                />
              );
            })}
            <Redirect to={`${path}/${SETTINGSMOCK[0].route}`} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};
export default Settings;
