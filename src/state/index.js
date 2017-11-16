import React from "react";
import { createStore } from "redux";
import reducer from "./reducer";
import {DEFAULT_DIMENSION, buildGameBoard} from "./gameBoard"; 

const defaultState = {
  dimension:DEFAULT_DIMENSION,
  board:buildGameBoard, 
};

const store = createStore(reducer, defaultState);

export default store; 
