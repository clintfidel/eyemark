import { types } from "./types";

export const register = payload => ({ type: types.REGISTER, payload });
export const login = payload => ({ type: types.LOGIN, payload });
