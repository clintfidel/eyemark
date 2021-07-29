import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, NavLink, Redirect } from "react-router-dom";
import { Loading } from "components";
import { dashboardRoutes } from "routes/routes-list";
import {
  SidebarLogo,
  CollapseIcon,
  MoreIcon,
  HomeIcon,
  FolderIcon,
  CategoryIcon,
  NotificationIcon,
  EyemarkedIcon,
  ProfileIcon,
  SettingsIcon,
  BadgeIcon,
  SearchIcon
} from "assets/icons(svg)";
const Profile = React.lazy(() => import("./pages/Profile"));
const Home = React.lazy(() => import("./pages/Home"));
import "./style.scss";

const Sidebar = ({}) => {
  let { url } = useRouteMatch();
  return (
    <div className="sidebar relative">
      <div className="logo flex items-center justify-between">
        <img src={SidebarLogo} />
        <img src={CollapseIcon} />
      </div>
      <div className="user-details flex items-center justify-between">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            className="pp"
          />
          <div className="info">
            <h2 className="full-name">Deborah Olabanji</h2>
            <p className="username">@debbie_more</p>
          </div>
        </div>
        <img src={MoreIcon} />
      </div>
      <hr className="horizontal-line" />
      <div className="navs">
        <NavLink to={`${url}/${dashboardRoutes.home}`} className="nav" activeClassName="nav-active">
          <img src={HomeIcon} />
          <p>Home</p>
        </NavLink>
        <NavLink to={`${url}/${dashboardRoutes.projects}`} className="nav" activeClassName="nav-active">
          <img src={FolderIcon} />
          <p>Project</p>
        </NavLink>
        <NavLink to={`${url}/${dashboardRoutes.categories}`} className="nav" activeClassName="nav-active">
          <img src={CategoryIcon} />
          <p>Categories</p>
        </NavLink>
        <NavLink to={`${url}/${dashboardRoutes.notifications}`} className="nav" activeClassName="nav-active">
          <img src={NotificationIcon} />
          <p>Notifications</p>
        </NavLink>
        <NavLink to={`${url}/${dashboardRoutes.eyemarked}`} className="nav" activeClassName="nav-active">
          <img src={EyemarkedIcon} />
          <p>Eyemarked</p>
        </NavLink>
        <NavLink to={`${url}/${dashboardRoutes.profile}`} className="nav" activeClassName="nav-active">
          <img src={ProfileIcon} />
          <p>Profile</p>
        </NavLink>
        <NavLink to={`${url}/${dashboardRoutes.settings}`} className="nav" activeClassName="nav-active">
          <img src={SettingsIcon} />
          <p>Settings</p>
        </NavLink>
      </div>
      <div className="absolute bottom-8 lang left-0 right-0 lang">
        <hr className="horizontal-line2" />
        <div className="flex items-center">
          <p className="lang-active">English</p>
          <p>Igbo</p>
          <p>Yoruba</p>
          <p>Hausa</p>
        </div>
      </div>
    </div>
  );
};

const FollowSuggestion = ({}) => {
  return (
    <div className="follow flex items-center justify-between">
      <div className="flex">
        <img
          className="mr-2 pp"
          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        />
        <div className="info">
          <p className="full-name">Lagos-Ibadan Ex...</p>
          <p className="username">@bank_w</p>
        </div>
      </div>
      <button className="follow-button-u border-dashed">Follow</button>
    </div>
  );
};

const SidebarProfile = ({}) => {
  return (
    <div className="sidebar2 relative">
      <div className="search-input relative">
        <img src={SearchIcon} className="absolute left-5" />
        <input type="text" className="s-input" placeholder="search your profile" />
      </div>
      <div className="profile-info flex">
        <img
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
          className="pp"
        />
        <p className="full-name">Deborah olabanji</p>
        <p className="username">@debbie_more</p>
      </div>
      <div className="insights flex justify-between">
        <div className="insight">
          <h5 className="text">Review</h5>
          <h4 className="value">85</h4>
        </div>
        <div className="insight">
          <h5 className="text">Eyemarked</h5>
          <h4 className="value">122</h4>
        </div>
        <div className="insight">
          <h5 className="text">Badge</h5>
          <img src={BadgeIcon} />
        </div>
      </div>
      <p className="bio">
        I do not do Labels. I am ME. I say it as it is. My mum says in my court nobody wins. You would either love me or
        hate me and either one is perfectly okay 💪🏾
      </p>
      <hr className="horizontal-line" />
      <h4 className="follow-title">Follow suggestion</h4>
      <FollowSuggestion />
      <FollowSuggestion />
      <div className="absolute bottom-8 footer left-0 right-0">
        <hr className="horizontal-line2" />
        <p> Eyemark &copy; 2021. All right reserved. </p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="dash-contents flex items-center">
        <Sidebar />
        <div className="mainContents">
          <Switch>
            <Route path={`${path}/${dashboardRoutes.home}`} render={props => <Home {...props} />} />
            <Route path={`${path}/${dashboardRoutes.profile}`} render={props => <Profile {...props} />} />
            <Redirect to={`${path}/${dashboardRoutes.home}`} />
          </Switch>
        </div>
        <SidebarProfile />
      </div>
    </Suspense>
  );
};

export default Dashboard;
