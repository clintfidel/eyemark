import { types } from "./types";

const initialState = {
  loading: false,
  user: {}
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_LOADING:
      return { ...state, loading: true };
    case types.REGISTER_DONE:
      return { ...state, loading: false };
    case types.GET_USER:
      return { ...state, user: payload };
    default: {
      return state;
    }
  }
};
