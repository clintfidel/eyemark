import { AuthContext } from "context/AuthContext";
import Login from "modules/Login";
import React, { useContext } from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    state: { is_authenticated }
  } = useContext(AuthContext);
  console.log(is_authenticated);

  return <Route {...rest} render={props => (is_authenticated ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
