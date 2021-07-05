import { publicRequest } from "network/https";

export const sampleAPIcall = () => {
  return publicRequest({ route: "/users" });
};
