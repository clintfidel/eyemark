import React, { Component, Suspense } from "react";
import history from "routes/history";
import { Error, Loading } from "components";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "modules/Login";
import Dashboard from "modules/Dashboard";
import CreateAccount from "modules/CreateAccount";
import { withTranslation } from "react-i18next";
import "i18n";
import PrivateRoute from "routes/privateroute";

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
            <Route path="/onboarding" component={CreateAccount} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default withTranslation()(App);
