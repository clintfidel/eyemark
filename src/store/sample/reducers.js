import { types } from "./types";

const initialState = {
  loading: false
};

export const sampleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SAMPLE_LOADING:
      return { ...state, loading: true };
    case types.SAMPLE_SUCCESS:
      return { ...state, loading: false };
    default: {
      return state;
    }
  }
};
