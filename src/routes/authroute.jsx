import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import { Route, Redirect } from "react-router";

const AuthRoute = ({ component: Component, ...rest }) => {
  const {
    state: { is_authenticated }
  } = useContext(AuthContext);
  console.log(is_authenticated);

  return (
    <Route
      {...rest}
      render={props => (is_authenticated ? <Redirect to="/citizen/dashboard" /> : <Component {...props} />)}
    />
  );
};

export default AuthRoute;
