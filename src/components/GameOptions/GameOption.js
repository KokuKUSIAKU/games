import React from "react";
import SimpleOption from "./SimpleOption"; 
import LargeOption from "./LargeOption"; 

const GameOptionComponent = () => (
  <div className="card-deck game-options">
    <SimpleOption/>
    <LargeOption/>
  </div>
);

export default GameOptionComponent; 
