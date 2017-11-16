import React from "react";
import Board from "./Board";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dim: state.dimension
  };
}

const GameBoard = connect(
  mapStateToProps
)(Board);

export default GameBoard; 