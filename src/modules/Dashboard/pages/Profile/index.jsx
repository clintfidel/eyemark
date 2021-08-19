import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, NavLink, Redirect } from "react-router-dom";
import { Loading } from "components";
import { useTranslation } from "react-i18next";
import { profileRoutes } from "routes/routes-list";
import { Arrowback } from "assets/icons(svg)";

const Screen1 = React.lazy(() => import("./pages/Screen1"));
const Screen2 = React.lazy(() => import("./pages/Screen2"));
const Screen3 = React.lazy(() => import("./pages/Screen3"));
const Screen4 = React.lazy(() => import("./pages/Screen4"));
const Screen5 = React.lazy(() => import("./pages/Screen5"));
import "./style.scss";

const Profile = () => {
  const { t } = useTranslation();
  let { path, url } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="profile-container">
        <NavLink to="/dashboard/feed">
          <div className="navigation1 flex items-center">
            <img className="mr-5 md:block lg:hidden" src={Arrowback} />
            <p className="nav-text">{t("profile:Profile")}</p>
          </div>
        </NavLink>
        <div className="content">
          <div className="nav-contents w-full">
            <div className="navigation2">
              <NavLink to={`${url}/${profileRoutes.screen1}`} className="nav" activeClassName="nav-active">
                <p>Posts</p>
              </NavLink>
              <NavLink to={`${url}/${profileRoutes.screen2}`} className="nav" activeClassName="nav-active">
                <p>Media</p>
              </NavLink>
              <NavLink to={`${url}/${profileRoutes.screen3}`} className="nav" activeClassName="nav-active">
                <p>Eyemarked</p>
              </NavLink>
              <NavLink to={`${url}/${profileRoutes.screen4}`} className="nav" activeClassName="nav-active">
                <p>Followers</p>
              </NavLink>
              <NavLink to={`${url}/${profileRoutes.screen5}`} className="nav" activeClassName="nav-active">
                <p>Following</p>
              </NavLink>
            </div>
          </div>
          <div className="border-divider" />
          <Switch>
            <Route path={`${path}/${profileRoutes.screen1}`} render={props => <Screen1 {...props} />} />
            <Route path={`${path}/${profileRoutes.screen2}`} render={props => <Screen2 {...props} />} />
            <Route path={`${path}/${profileRoutes.screen3}`} render={props => <Screen3 {...props} />} />
            <Route path={`${path}/${profileRoutes.screen4}`} render={props => <Screen4 {...props} />} />
            <Route path={`${path}/${profileRoutes.screen5}`} render={props => <Screen5 {...props} />} />
            <Redirect to={`${path}/${profileRoutes.screen1}`} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};
export default Profile;
