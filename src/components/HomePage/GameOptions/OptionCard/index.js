import React from "react";
import PropTypes from "prop-types";

const OptionCard = ({ option, controller }) => (
  <article id={`option-${option.title}`}
    className={`card ${option.classOpt}`}
    onClick={controller}>
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

export default OptionCard; 