import * as types from "../types";

let initialState = true;

const myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.HasInternet:
      return action.data;
    default:
      return state;
  }
};
export default myReducers;
