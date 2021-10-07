import { privateRequest, publicRequest } from "network/https";

export const createAccount = payload => {
  return publicRequest({ method: "POST", route: "/api/users/register/", payload });
};

export const requestLogin = payload => {
  return publicRequest({ method: "POST", route: "/api/auth/login/", payload });
};

export const userProfile = () => {
  return privateRequest({ method: "GET", route: "/api/auth/user/" });
};

export const verifyToken = otp => {
  return privateRequest({ method: "POST", route: "/api/users/verify/", payload: { otp } });
};

export const generateToken = () => {
  return privateRequest({ method: "GET", route: "/api/users/verify/" });
};

export const updateUser = payload => {
  return privateRequest({ method: "PATCH", route: "/api/users/update/", payload });
};

export const updateInterests = payload => {
  return privateRequest({ method: "POST", route: "/api/users/interests/", payload });
};

export const getInterests = async () => {
  const response = await privateRequest({ method: "GET", route: "/api/users/interest-options" });
  return response.data;
};

export const getFollowSuggestions = async () => {
  const response = await privateRequest({ method: "GET", route: "/api/users/interests" });
  return response.data;
};

export const followUser = async user_id => {
  const response = await privateRequest({ method: "POST", route: "/api/users/follow/", payload: { user_id } });
  return response.data;
};

export const unfollowUser = async user_id => {
  const response = await privateRequest({ method: "POST", route: "/api/users/unfollow/", payload: { user_id } });
  return true;
};

export const eyemarkProject = async project_id => {
  const response = await privateRequest({
    method: "POST",
    route: "/api/projects/eyemark/",
    payload: { projects: [project_id] }
  });
  return response.data;
};

export const getProjects = async () => {
  const response = await privateRequest({ method: "POST", route: "/api/projects/" });
  return response.data;
};
