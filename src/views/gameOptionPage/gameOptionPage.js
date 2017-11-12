import React from "react";
import GameOption from "../../components/gameOptions/gameOption";

const GAME_OPTIONS = {
  SIMPLE: "simple",
  LARGE: "large"
};

const GameOptionPage = () => (
  <section id="game-option-page">
    { Object.values(GAME_OPTIONS).map( 
      (option,index) => <GameOption key={`option-${index}`} option={option}/>)
    }
  </section>
);


export default GameOptionPage;




