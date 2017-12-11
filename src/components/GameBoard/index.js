/* eslint-disable */
import React from "react";
import Board from "./Board";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
/* eslint-enable */

function mapStateToProps(state) {
  return {
    dim: state.dimension, 
    boards:state.boards
  };
}

const GameBoard = connect(
  mapStateToProps
)(Board);

export default GameBoard; 