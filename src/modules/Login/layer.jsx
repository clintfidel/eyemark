import { AuthContext } from "context/AuthContext";
import React, { useContext, useEffect } from "react";

const LoginLayer = ({ children }) => {
  const { clear_error_message } = useContext(AuthContext);

  useEffect(() => {
    clear_error_message("");
  }, []);
  return children;
};

export default LoginLayer;
