import React, { Suspense, useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { Loading } from "components";
import { modulesRoutes } from "routes/routes-list";
import "theme/onboarding.scss";
import PrivateRoute from "routes/privateroute";
import CitizenLayer from "./layer";
import { AuthContext } from "context/AuthContext";
import { checkUserRole } from "helpers";
const CreateAccount = React.lazy(() => import("./pages/CreateAccount"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const Citizen = ({ history, location }) => {
  const { state: userState } = useContext(AuthContext);
  const { path } = useRouteMatch();

  useEffect(() => {
    checkUserRole(userState, path, history);
  }, [location]);

  return (
    <Suspense fallback={<Loading />}>
      <CitizenLayer>
        <Switch>
          <Route path={`${path}/${modulesRoutes.screen1}`} render={props => <CreateAccount {...props} />} />
          <PrivateRoute path={`${path}/${modulesRoutes.screen2}`} component={Dashboard} />
          <Redirect to={`${path}/${modulesRoutes.screen1}`} />
        </Switch>
      </CitizenLayer>
    </Suspense>
  );
};

export default Citizen;
