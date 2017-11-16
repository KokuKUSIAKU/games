import { combineReducers } from "redux";
import board from "./board";
import dimension from "./dimension";

const rootReducer = combineReducers({
  dimension,
  board,
});

export default rootReducer; 