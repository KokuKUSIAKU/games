/*eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import ButtonList from "../ButtonList";
import styles from "./style.scss";
import store from "../../../state";
/*eslint-enable */

const Board = ({ boards }) => {
  return (
    <div className="game-wrapper">
      <section id="game">
        {boards.map((board, index) => <ButtonList key={index} board={board} row={index} />)}
      </section>
    </div>
  );
};

Board.propTypes = {
  dim: PropTypes.number.isRequired,
};

export default Board;

