import React from "react";
import ScoreBoard from "../scoreBoard";
import StartButton from "../StartButton";
import GameBoard from "../GameBoard";
import style from "./style.scss";

const PartyLayout = () => (
  <div id="party-layout">
    <div className="score-container">
      <ScoreBoard/>
    </div>
    <div className="game-container">
      <GameBoard/>
    </div>
    <div className="startbutton-container">
      <StartButton initiator={require("../../tictactoe").default}/>
    </div>
  </div>
);

export default PartyLayout; 