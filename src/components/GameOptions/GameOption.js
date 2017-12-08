import React from "react";
import PropTypes from "prop-types";
import OptionCard from "./OptionCard"; 
import OPTIONS from "./constants"; 
import SimpleOption from "./SimpleOption"; 
import LargeOption from "./LargeOption"; 

const GameOptionComponent = () => (
  <div className="card-deck game-options">
    <SimpleOption/>
    <LargeOption/>
  </div>
);

export default GameOptionComponent; 
