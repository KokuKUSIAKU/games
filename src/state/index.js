import React from "react";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducer";
import { DEFAULT_DIMENSION, buildGameBoard } from "./gameBoard";

const defaultState = {
  dimension: DEFAULT_DIMENSION,
  boards: buildGameBoard(),
  players: [
    {
      name:"YOU",
      score:0
    },
    {
      name:"COMPUTER",
      score:0
    }
  ]
};
// applyMiddleware(logger)
const store = createStore(rootReducer, defaultState, applyMiddleware(logger));
export default store; 
