import { combineReducers } from "redux";
import { sampleReducer } from "./sample";

const appReducer = combineReducers({
  sample: sampleReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
