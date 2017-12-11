import React from "react";
import { buildGameBoard } from "../gameBoard";

function updateBoard(state = [], action) {
  if (action.type == "UPDATE") {
    let newBoard = [...state];
    let { row, column } = action.position;
    newBoard[row][column] = { 
      row,
      column,
      owner:action.owner
    }; 
    return newBoard;
  }
  return state; 
}

function initialiseBoard(action) { 
  return buildGameBoard(action.dimension);
}

function boards(state = [], action) {
  switch (action.type) {
    case "UPDATE":
      return updateBoard(state, action);
    case "RESET-BOARD": 
      return buildGameBoard(state.length); 
    case "SIMPLE":
    case "LARGE":
      return [ ...initialiseBoard(action)];
    default:
      return state;
  }
}

export default boards; 