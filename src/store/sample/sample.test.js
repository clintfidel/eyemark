import { sampleReducer } from "./reducers";
import { types } from "./types";

describe("sample reducer", () => {
  const initialState = {
    loading: false
  };

  it("should return initial state", () => {
    expect(sampleReducer(undefined, {})).toEqual({
      loading: false
    });
  });

  it("should set sample to success", () => {
    expect(
      sampleReducer(initialState, {
        type: types.SAMPLE_SUCCESS,
        payload: ["sample"]
      })
    ).toEqual({
      loading: false
    });
  });

  it("should set sample to failed", () => {
    expect(
      sampleReducer(initialState, {
        type: types.SAMPLE_FAILED,
        payload: ["sample"]
      })
    ).toEqual({
      ...initialState,
      loading: false
    });
  });
});
