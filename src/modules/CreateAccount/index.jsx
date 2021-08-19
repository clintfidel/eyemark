import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Loading } from "components";
import { createAccountRoutes } from "routes/routes-list";
const Screen1 = React.lazy(() => import("./pages/Screen1"));
const Screen2 = React.lazy(() => import("./pages/Screen2"));
const Screen3 = React.lazy(() => import("./pages/Screen3"));
const Screen4 = React.lazy(() => import("./pages/Screen4"));
const Screen5 = React.lazy(() => import("./pages/Screen5"));
const Screen6 = React.lazy(() => import("./pages/screen6"));
const Screen7 = React.lazy(() => import("./pages/screen7"));
const Screen8 = React.lazy(() => import("./pages/Screen8"));

import "./style.scss";

const CreateAccount = () => {
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Switch>
          <Route path={`${path}/${createAccountRoutes.screen1}`} render={props => <Screen1 {...props} />} />
          <Route path={`${path}/${createAccountRoutes.screen2}`} render={props => <Screen2 {...props} />} />
          <Route path={`${path}/${createAccountRoutes.screen3}`} render={props => <Screen3 {...props} />} />
          <Route path={`${path}/${createAccountRoutes.screen4}`} render={props => <Screen4 {...props} />} />
          <Route path={`${path}/${createAccountRoutes.screen5}`} render={props => <Screen5 {...props} />} />
          <Route path={`${path}/${createAccountRoutes.screen6}`} render={props => <Screen6 {...props} />} />
          <Route path={`${path}/${createAccountRoutes.screen7}`} render={props => <Screen7 {...props} />} />
          <Route path={`${path}/${createAccountRoutes.screen8}`} render={props => <Screen8 {...props} />} />
        </Switch>
      </div>
    </Suspense>
  );
};

export default CreateAccount;
