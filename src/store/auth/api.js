import { publicRequest } from "network/https";

export const register = payload => {
  console.log(payload);
  return publicRequest({ method: "POST", route: "/api/users/register", payload });
};
