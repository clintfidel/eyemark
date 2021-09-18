import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Loading } from "components";
import { useTranslation } from "react-i18next";
import { categoriesRoutes } from "routes/routes-list";
const Screen1 = React.lazy(() => import("./pages/Screen1"));
const Screen2 = React.lazy(() => import("./pages/Screen2"));
const Screen3 = React.lazy(() => import("./pages/Screen3"));
const ScreenLast = React.lazy(() => import("./pages/ScreenLast"));
import "./style.scss";

const Categories = () => {
  const { t } = useTranslation();
  let { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <div className="categories-container">
        <div className="navigation-c flex items-center">
          <p>{t("categories:Categories")}</p>
        </div>
        <div className="content">
          <Switch>
            <Route exact path={path} render={props => <Screen1 {...props} />} />
            <Route path={`${path}/${categoriesRoutes.screen2}`} render={props => <Screen2 {...props} />} />
            <Route path={`${path}/${categoriesRoutes.screen3}`} render={props => <Screen3 {...props} />} />
            <Route exact path={`${path}/${categoriesRoutes.screenLast}`} render={props => <ScreenLast {...props} />} />
            <Route
              path={`${path}/${categoriesRoutes.screenLast}/:cat/:id`}
              render={props => <ScreenLast {...props} />}
            />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};
export default Categories;
