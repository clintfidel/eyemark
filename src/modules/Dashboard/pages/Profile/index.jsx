import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, NavLink, Redirect } from "react-router-dom";
import { Loading } from "components";
import { profileRoutes } from "routes/routes-list";
const Screen1 = React.lazy(() => import("./pages/Screen1"));
const Screen2 = React.lazy(() => import("./pages/Screen2"));
const Screen3 = React.lazy(() => import("./pages/Screen3"));
const Screen4 = React.lazy(() => import("./pages/Screen4"));
const Screen5 = React.lazy(() => import("./pages/Screen5"));
import "./style.scss";
import LeftMenu from "../../leftMenu";
import RightMenu from "../../rightMenu";

const Profile = ({ rightDrawer, leftDrawer }) => {
  let { path, url } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="profile-container">
        <div className="nav-cont-profile">
          <div className="flex pt-5 pb-3 px-5 justify-between md:hidden lg:hidden mobile-view">
            <LeftMenu click={leftDrawer} />
            <RightMenu click={rightDrawer} />
          </div>
          <div className="navigation">
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
        <div className="content">
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
