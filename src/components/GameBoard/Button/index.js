import React from "react";
import store from "../../../state";
import play from "./action";

const Button = ({ row, column }) => (
  <button className="game-button"
    row={row}
    column={column}
    onClick={buttonController}>
  </button>
);

const buttonController = (e) => {
  e.preventDefault(); 
  store.dispatch(play(e.target.attributes)); 
}; 

export default Button; 