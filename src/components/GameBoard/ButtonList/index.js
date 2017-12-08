import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

const ButtonList = ({ board, row }) => (
  <div className="cards">
    <ul className="card-list">
      {board.map((bt, index) => <li  key={index}><Button content={bt} row={row} column={index} /></li>)}
    </ul>
  </div>
);

ButtonList.PropTypes = {
  board:PropTypes.array.isRequired,
  row:PropTypes.number.isRequired, 
}; 

export default ButtonList; 
