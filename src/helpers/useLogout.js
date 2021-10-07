import { AuthContext } from "context/AuthContext";
import { userProfile } from "network/api";
import React, { useContext, useEffect } from "react";

const UseLogout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    handleLoginStatus();
  }, []);

  const handleLoginStatus = async () => {
    try {
      const response = await userProfile();
    } catch (err) {
      if (err.data) {
        if (err.data.status_code === 401) logout();
      }
    }
  };

  return <>{children}</>;
};

export default UseLogout;
