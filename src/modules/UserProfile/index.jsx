import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Loading } from "components";
import { userProfilesRoutes } from "routes/routes-list";
const Screen1 = React.lazy(() => import("./pages/Screen1"));
import "./style.scss";

const Sample = () => {
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Switch>
          <Route exact path={`${path}/${userProfilesRoutes.screen1}`} render={props => <Screen1 {...props} />} />
        </Switch>
      </div>
    </Suspense>
  );
};

export default Sample;
