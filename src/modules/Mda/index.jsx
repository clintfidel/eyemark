import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { Loading } from "components";
import { modulesRoutes } from "routes/routes-list";
import "theme/onboarding.scss";
const CreateAccount = React.lazy(() => import("./pages/CreateAccount"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const Mda = () => {
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Switch>
          <Route path={`${path}/${modulesRoutes.screen1}`} render={props => <CreateAccount {...props} />} />
          <Route path={`${path}/${modulesRoutes.screen2}`} render={props => <Dashboard {...props} />} />
          <Redirect to={`${path}/${modulesRoutes.screen1}`} />
        </Switch>
      </div>
    </Suspense>
  );
};

export default Mda;
