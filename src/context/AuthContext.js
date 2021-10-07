import { parseError } from "helpers";
import { createAccount, generateToken, requestLogin, updateUser } from "network/api";
import history from "routes/history";
import { createAccountRoutes, modulesRoutes } from "routes/routes-list";
import createDataContext from "./createDataContext";

let INITIAL_STATE = {
  user: null,
  token: null,
  is_authenticated: false,
  error: null,
  loading: false
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REJECTED":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case "SAVE":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        is_authenticated: true,
        loading: false,
        error: null
      };
    case "CLEAR_ERROR_MESSAGE":
      return {
        ...state,
        error: null,
        loading: false
      };
    case "PENDING":
      return { ...state, loading: true, error: null };
    case "SIGNOUT":
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
};

const login = dispatch => async params => {
  try {
    dispatch({ type: "PENDING" });

    const response = await requestLogin(params);
    const { data } = response;

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

    dispatch({ type: "SAVE", payload: data });
  } catch (error) {
    dispatch({
      type: "REJECTED",
      payload: error
    });
  }
};

const register = dispatch => async params => {
  try {
    dispatch({ type: "PENDING" });

    params.email_verified = false;
    const response = await createAccount(params);
    const { data } = response;

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

    //kmphaeoo@sharklasers.com
    await generateToken();

    dispatch({ type: "SAVE", payload: data });
    history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen2}`);
  } catch (error) {
    dispatch({
      type: "REJECTED",
      payload: error
    });
  }
};

const update = dispatch => async (params, onComplete) => {
  try {
    dispatch({ type: "PENDING" });

    const response = await updateUser(params);
    const { data } = response;

    const access_token = localStorage.getItem("token", data.access_token);
    const refresh_token = localStorage.getItem("refresh_token", data.refresh_token);

    const payload = {
      access_token,
      refresh_token,
      user: data
    };

    dispatch({ type: "SAVE", payload });
    if (onComplete) onComplete();
  } catch (error) {
    console.log(error);
    dispatch({
      type: "REJECTED",
      payload: error
    });
  }
};

const clear_error_message = dispatch => async () => {
  try {
    dispatch({ type: "CLEAR_ERROR_MESSAGE" });
  } catch (error) {
    dispatch({
      type: "REJECTED",
      payload: error
    });
  }
};

const logout = dispatch => async () => {
  try {
    localStorage.clear();
    dispatch({ type: "SIGNOUT", payload: "" });
  } catch (error) {
    dispatch({
      type: "REJECTED",
      payload: error
    });
  }
};

const DataContext = createDataContext(
  "AUTH",
  AuthReducer,
  { login, register, update, clear_error_message, logout },
  INITIAL_STATE
);

export const { Provider: AuthProvider, Context: AuthContext } = DataContext;
