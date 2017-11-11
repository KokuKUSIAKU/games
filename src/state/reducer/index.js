import { combineReducers } from "redux";
import boards from "./boards";
import dimension from "./dimension";
import players from "./players"; 

const rootReducer = combineReducers({
  dimension,
  boards,
  players
});

export default rootReducer; 