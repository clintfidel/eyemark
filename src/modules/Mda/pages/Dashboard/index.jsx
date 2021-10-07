import React, { Suspense, useState } from "react";
import { Switch, Route, useRouteMatch, NavLink, Redirect } from "react-router-dom";
import { Loading } from "components";
import BackDrop from "./backdrop";
import { dashboardRoutes, analyticsRoutes } from "routes/routes-list";
import {
  SidebarLogoWhite,
  MoreIconBlack,
  HomeIcon,
  FolderIcon,
  CategoryIcon,
  NotificationIcon,
  EyemarkedIcon,
  ProfileIcon,
  SearchIcon,
  MdaLogo,
  SettingsIcon,
  ArrowForward
} from "assets/icons(svg)";
const Profile = React.lazy(() => import("./pages/Profile"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Project = React.lazy(() => import("./pages/Project"));
const Contractors = React.lazy(() => import("./pages/Contractors"));
const Overview = React.lazy(() => import("./pages/Overview"));
const Analytics = React.lazy(() => import("./pages/Analytics"));
const ProjectCreation = React.lazy(() => import("./pages/ProjectCreation"));
const Settings = React.lazy(() => import("./pages/Settings"));
import "./style.scss";

const Sidebar = ({ show }) => {
  let drawerClasses = ["sidebar"];

  if (show) {
    drawerClasses = ["sidebar", "open"];
  }
  let { url } = useRouteMatch();
  return (
    <div className={`sidebar-mda relative ${drawerClasses.join(" ")}`}>
      <div className="logo flex items-center justify-between">
        <img src={SidebarLogoWhite} />
        {/* <img src={CollapseIcon} /> */}
      </div>
      <div className="user-details flex items-center justify-between">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            className="pp"
          />
          <div className="info-mda">
            <h2 className="full-name-mda">
              Ministry of works and
              <br className="pt-2" /> housing
            </h2>
          </div>
        </div>
        <img src={MoreIconBlack} />
      </div>
      <hr className="horizontal-line" />
      <div className="navs">
        <NavLink to={`${url}/${dashboardRoutes.overview}`} className="nav-mda" activeClassName="nav-active-mda">
          <img src={HomeIcon} />
          <p>Overview</p>
        </NavLink>
        {/* <NavLink to={`${url}/${dashboardRoutes.contractors}`} className="nav-mda" activeClassName="nav-active-mda">
          <img src={FolderIcon} />
          <p>Contractors</p>
        </NavLink> */}
        <NavLink to={`${url}/${dashboardRoutes.projects}`} className="nav-mda" activeClassName="nav-active-mda">
          <img src={FolderIcon} />
          <p>Projects</p>
        </NavLink>
        {/* <NavLink to={`${url}/${dashboardRoutes.categories}`} className="nav-mda" activeClassName="nav-active-mda">
          <img src={CategoryIcon} />
          <p>Categories</p>
        </NavLink> */}
        {/* <NavLink to={`${url}/${dashboardRoutes.notifications}`} className="nav-mda" activeClassName="nav-active-mda">
          <img src={NotificationIcon} />
          <p>Notifications</p>
        </NavLink> */}
        <NavLink to={`${url}/${dashboardRoutes.analytics}`} className="nav-mda" activeClassName="nav-active-mda">
          <img src={EyemarkedIcon} />
          <p>Analytics</p>
        </NavLink>
        <div className="flex ml-6 analytics-sub-cont">
          <div className="mx-4 vert-line" />
          <div>
            <NavLink
              className=""
              activeClassName="nav-active-analytics"
              to={`${url}/${dashboardRoutes.analytics}/${analyticsRoutes.screen1}`}
            >
              <p className="analytics-sub mb-3">Projects</p>
            </NavLink>
            <NavLink
              className=""
              activeClassName="nav-active-analytics"
              to={`${url}/${dashboardRoutes.analytics}/${analyticsRoutes.screen2}`}
            >
              <p className="analytics-sub mb-3">Citizens</p>
            </NavLink>
            <NavLink
              className=""
              activeClassName="nav-active-analytics"
              to={`${url}/${dashboardRoutes.analytics}/${analyticsRoutes.screen3}`}
            >
              <p className="analytics-sub mb-3">Contractors</p>
            </NavLink>
            <NavLink
              className=""
              activeClassName="nav-active-analytics"
              to={`${url}/${dashboardRoutes.analytics}/${analyticsRoutes.screen4}`}
            >
              <p className="analytics-sub mb-1">Surveys</p>
            </NavLink>
          </div>
        </div>
        <NavLink to={`${url}/${dashboardRoutes.profile}`} className="nav-mda mt-5" activeClassName="nav-active">
          <img src={ProfileIcon} />
          <p>Profile</p>
        </NavLink>
        <NavLink to={`${url}/${dashboardRoutes.settings}`} className="nav-mda" activeClassName="nav-active-mda">
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

const Dashboard = () => {
  const [leftSideDrawerOpen, setLeftSideDrawer] = useState(false);

  const leftDrawerToggleClickHandler = () => {
    setLeftSideDrawer({ leftSideDrawerOpen: !leftSideDrawerOpen });
  };

  const backDropClickHandler = () => {
    setLeftSideDrawer(false);
  };

  let backdrop;

  if (leftSideDrawerOpen) {
    backdrop = <BackDrop click={backDropClickHandler} />;
  }
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

  const SidebarProfile = () => {
    return (
      <div className={"relative sidebar2"}>
        <div className="search-input relative">
          <img src={SearchIcon} className="absolute left-5" />
          <input type="text" className="s-input" placeholder="search your profile" />
        </div>
        <div className="profile-info mb-10 flex">
          <img src={MdaLogo} className="pp" />
          <p className="full-name">
            Federal Ministry of Works <br /> and Housing
          </p>
        </div>
        <div className="insights flex justify-between">
          <div className="insight">
            <h5 className="text">Followers</h5>
            <h4 className="value value-bold">300</h4>
          </div>
          <div className="insight">
            <h5 className="text">Project Allocated</h5>
            <h4 className="value value-bold">122</h4>
          </div>
        </div>

        <p className="bio">
          I do not do Labels. I am ME. I say it as it is. My mum says in my court nobody wins. You would either love me
          or hate me and either one is perfectly okay 💪🏾
        </p>
        <hr className="horizontal-line" />
        <h4 className="follow-title">Follow suggestion</h4>
        <p className="sidebar-sub-text">
          Keep projects within your supervision by taping on the <br /> Eyemark button.
        </p>
        <FollowSuggestion />
        <FollowSuggestion />
        <div className="absolute bottom-8 footer left-0 right-0">
          <hr className="horizontal-line2" />
          <p> Eyemark &copy; 2021. All right reserved. </p>
        </div>
      </div>
    );
  };
  const SidebarProject = () => {
    return (
      <div className={"relative sidebar2"}>
        <div className="search-input relative">
          <img src={SearchIcon} className="absolute left-5" />
          <input type="text" className="s-input" placeholder="search your profile" />
        </div>
        <div className="profile-info mb-10 flex">
          <img src={MdaLogo} className="pp" />
          <div className="edit-p-button mt-6 mb-4">
            <p className="edit-p-text">Edit Project</p>
          </div>
        </div>
        <div className="insights flex justify-between">
          <div className="insight">
            <h5 className="text">Eyemarked</h5>
            <h4 className="value value-bold">2M</h4>
          </div>
          <div className="insight">
            <h5 className="text">Reviews</h5>
            <h4 className="value value-bold">122</h4>
          </div>
          <div className="insight">
            <h5 className="text">AVG. SENTIMENT</h5>
            <h4 className="value value-bold">😆 Excited</h4>
          </div>
        </div>

        <p className="bio text-center mt-10">PROJECT CODE - #897U32RN234</p>
        <p className="bio text-center mt-8">This project is sponsored by World Bank</p>

        <hr className="horizontal-line" />
        <div className="flex">
          <img src={ArrowForward} className="" />
          <div className="ml-5">
            <p className="sidebar-p-text">Housing</p>
            <p className="sidebar-p-text-sub mt-2">SECTOR</p>
          </div>
        </div>
        <div className="flex mt-3">
          <img src={ArrowForward} className="" />
          <div className="ml-5">
            <p className="sidebar-p-text">Enivroment & Wellbeing</p>
            <p className="sidebar-p-text-sub mt-2">DEPARTMENT</p>
          </div>
        </div>
        <div className="flex mt-3">
          <img src={ArrowForward} className="" />
          <div className="ml-5">
            <p className="sidebar-p-text">PPP</p>
            <p className="sidebar-p-text-sub mt-2">CONTRACTOR TYPE</p>
          </div>
        </div>
        <hr className="horizontal-line mt-5" />
        <div className="absolute bottom-8 footer left-0 right-0">
          <hr className="horizontal-line2" />
          <p> Eyemark &copy; 2021. All right reserved. </p>
        </div>
      </div>
    );
  };
  const displaySidebar = route => {
    if (route.includes("mda/dashboard/profile")) {
      return <SidebarProfile />;
    } else if (route.includes("/mda/dashboard/single")) {
      return <SidebarProject />;
    } else return null;
  };
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      {backdrop}
      <div className="dash-contents flex items-center">
        <Sidebar show={leftSideDrawerOpen} />
        <div className="mainContents">
          <Switch>
            <Route
              path={`${path}/${dashboardRoutes.overview}`}
              render={props => <Overview {...{ props, leftDrawerToggleClickHandler }} />}
            />
            <Route path={`${path}/${dashboardRoutes.contractors}`} render={props => <Contractors {...props} />} />
            <Route path={`${path}/${dashboardRoutes.projects}`} render={props => <Projects {...props} />} />
            <Route path={`${path}/${dashboardRoutes.single}`} render={props => <Project {...props} />} />
            <Route path={`${path}/${dashboardRoutes.profile}`} render={props => <Profile {...props} />} />
            <Route path={`${path}/${dashboardRoutes.analytics}`} render={props => <Analytics {...props} />} />
            <Route path={`${path}/${dashboardRoutes.createproject}`} render={props => <ProjectCreation {...props} />} />
            <Route path={`${path}/${dashboardRoutes.settings}`} render={props => <Settings {...props} />} />
            <Redirect to={`${path}/${dashboardRoutes.overview}`} />
          </Switch>
        </div>
        {displaySidebar(window.location.pathname)}
      </div>
    </Suspense>
  );
};

export default Dashboard;
