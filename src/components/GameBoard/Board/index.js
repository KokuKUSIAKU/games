import React from "react";
import PropTypes from "prop-types";
import ButtonList from "../ButtonList";
import styles from "./style.scss";

const Board = (props) => {
  return (
    <section id="game">
      {
        Array(props.dim).fill(undefined).map(
          (item, index) => <ButtonList key={index} dim={props.dim} row={index} />
        )
      }
    </section>
  );
};

Board.propTypes = {
  dim: PropTypes.number.isRequired,
};

export default Board; 