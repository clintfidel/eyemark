import React, { Component, Suspense } from "react";
import history from "routes/history";
import { Error, Loading } from "components";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "modules/Login";
import Citizen from "modules/Citizen";
import Contractors from "modules/Contractors";
import Mda from "modules/Mda";
import { withTranslation } from "react-i18next";
import "i18n";
import PrivateRoute from "routes/privateroute";
import AuthRoute from "routes/authroute";
import { AuthProvider } from "context/AuthContext";
import UseLogout from "helpers/useLogout";
import SurveyMda from "modules/Mda/pages/Dashboard/pages/Analytics/pages/Screen5";
import SurveyCitizen from "modules/Citizen/pages/Dashboard/pages/Project/pages/Screen7";

class App extends Component {
  state = {
    noInternetConnection: false
  };
  componentDidMount() {
    this.handleInternetConnectionChange();
    window.addEventListener("online", this.handleInternetConnectionChange);
    window.addEventListener("offline", this.handleInternetConnectionChange);
  }
  handleInternetConnectionChange = () => {
    navigator.onLine ? this.setState({ noInternetConnection: false }) : this.setState({ noInternetConnection: true });
  };
  render() {
    const { noInternetConnection } = this.state;
    let { t } = this.props;
    if (noInternetConnection) {
      return (
        <Suspense fallback={<Loading />}>
          <Error text={t("No Internet Connnection")} />
        </Suspense>
      );
    }
    return (
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <UseLogout>
            <Router history={history}>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/mda/dashboard/analytics/survey-questions" component={SurveyMda} />
                <Route path="/citizen/dashboard/survey-questions" component={SurveyCitizen} />
                <Route path="/mda" component={Mda} />
                <Route path="/citizen" component={Citizen} />
                <Route path="/contractors" component={Contractors} />
                <Redirect to="/login" />
              </Switch>
            </Router>
          </UseLogout>
        </AuthProvider>
      </Suspense>
    );
  }
}

export default withTranslation()(App);
