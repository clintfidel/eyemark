import { publicRequest } from "network/https";

export const register = payload => {
  return publicRequest({ method: "POST", route: "/api/users/register/", payload });
};

export const login = payload => {
  return publicRequest({ method: "POST", route: "/api/auth/login/", payload });
};
