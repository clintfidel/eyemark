import React, { Suspense, useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { Loading } from "components";
import { modulesRoutes } from "routes/routes-list";
import "theme/onboarding.scss";
import { AuthContext } from "context/AuthContext";
import { checkUserRole } from "helpers";
import PrivateRoute from "routes/privateroute";
const CreateAccount = React.lazy(() => import("./pages/CreateAccount"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const Mda = ({ history }) => {
  const { state: userState } = useContext(AuthContext);
  let { path } = useRouteMatch();

  useEffect(() => {
    checkUserRole(userState, path, history);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Switch>
          <Route path={`${path}/${modulesRoutes.screen1}`} render={props => <CreateAccount {...props} />} />
          <PrivateRoute path={`${path}/${modulesRoutes.screen2}`} component={Dashboard} />
          <Redirect to={`${path}/${modulesRoutes.screen1}`} />
        </Switch>
      </div>
    </Suspense>
  );
};

export default Mda;
