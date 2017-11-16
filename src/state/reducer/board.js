import React from "react";
import dimension from "./dimension";
import { buildGameBoard } from "../gameBoard";

function updateBoard(state = [], action) {
  if (action.type == "UPDATE") {
    let newBoard = [...state.board];
    let { row, column, Node } = action.target;
    newBoard[row][column] = React.createElement("button", { className: "bt" }, Node);
    return {
      board: newBoard
    };
  }
}

function initialiseBoard(action) {
  return {
    board: buildGameBoard(action.dimension)
  };
}

function board(state = [], action) {
  switch (action.type) {
    case "UPDATE":
      return updateBoard(state.board, action);
    case "SIMPLE":
    case "LARGE":
      return function () {
        Promise.resolve(() => dimension(state, action))
          .then(() => initialiseBoard(action));
      };
    default:
      return state;
  }
}

export default board; 