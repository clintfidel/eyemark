import React, { Component, Suspense } from "react";
import history from "routes/history";
import { Error, Loading } from "components";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Sample from "modules/Sample";
import Login from "modules/Login";
import UserProfile from "modules/UserProfile";
import CreateAccount from "modules/CreateAccount";
import { withTranslation } from "react-i18next";
import "i18n";

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
            {/* <Route path="/citizen/userprofile" component={User} /> */}
            <Route path="/onboarding" component={CreateAccount} />
            <Route path="/citizen/user-profile" component={UserProfile} />
            <Route path="/sample" component={Sample} />
            <Redirect to="/login" />
            {/* <PrivateRoute path="/" component={Main} /> */}
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default withTranslation()(App);
