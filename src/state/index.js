import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducer";
import DEFAULT_DIMENSION from "./constants"; 
import { initialisePlayers, buildGameBoard} from "./utility";

var store; 
const defaultState = {
  dimension: DEFAULT_DIMENSION,
  boards: buildGameBoard(DEFAULT_DIMENSION),
  players:initialisePlayers()
};


if( process.env.NODE_ENV !=="production" ) {
  store = createStore(rootReducer, defaultState, applyMiddleware(logger));
} else {
  store = createStore(rootReducer, defaultState);
}
 
export default store; 
