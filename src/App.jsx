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
import Questions from "modules/Mda/pages/Dashboard/pages/Analytics/pages/Screen5";

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
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/survey-questions" component={Questions} />
            <PrivateRoute path="/mda" component={Mda} />
            <PrivateRoute path="/citizen" component={Citizen} />
            <PrivateRoute path="/contractors" component={Contractors} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default withTranslation()(App);
