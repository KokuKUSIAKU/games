import React from "react";
import PropTypes from "prop-types";

const OPTIONS = {
  simple: {
    title: "Simple Version",
    text: " Simple Tic Tac Toe with 3x3 game board",
    classOpt:"bg-success"
  },
  large: {
    title: "Large Version",
    text: "large size Tic Tac Toe with customisable board till 10x10 size",
    classOpt:"bg-danger"
  },
};

const OptionCard = ({ option }) => (
  <article id={`option-${option.title}`} className={`card ${option.classOpt}`}>
    <h3 className="card-header">{option.title}</h3>
    <div className="card-body">
      <div className="card-text">
        <p>{option.text}</p>
      </div>
    </div>
  </article>
);

OptionCard.propTypes = {
  option: PropTypes.object.isRequired,
};

const GameOptionComponent = () => (
  <div className="game-options card-deck">
    <OptionCard option={OPTIONS.simple} />
    <OptionCard option={OPTIONS.large} />
  </div>
);

export default GameOptionComponent; 