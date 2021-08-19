import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Loading } from "components";
const Screen1 = React.lazy(() => import("./pages/Screen1"));
const Screen2 = React.lazy(() => import("./pages/Screen2"));
import "./style.scss";
import LeftMenu from "../../leftMenu";
import RightMenu from "../../rightMenu";

const Home = ({ leftDrawerToggleClickHandler, link }) => {
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="home-container">
        <div className="navigation"></div>
        <div className="flex items-center justify-between mobile-navigation">
          <LeftMenu click={leftDrawerToggleClickHandler} />
          <RightMenu link={link} />
        </div>
        <div className="content">
          <Switch>
            <Route exact path={path} render={props => <Screen1 {...props} />} />
            <Route path={`${path}/:id`} render={props => <Screen2 {...props} />} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};
export default Home;
