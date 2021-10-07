import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Loading } from "components";
import { loginRoutes } from "routes/routes-list";
const Screen1 = React.lazy(() => import("./pages/Screen1"));
import "./style.scss";
import LoginLayer from "./layer";
import AuthRoute from "routes/authroute";

const Login = () => {
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <LoginLayer>
        <Switch>
          <AuthRoute exact path={`${path}/${loginRoutes.screen1}`} component={Screen1} />
        </Switch>
      </LoginLayer>
    </Suspense>
  );
};

export default Login;
