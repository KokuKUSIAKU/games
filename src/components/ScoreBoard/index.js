/* eslint-disable*/
import React from "react";
import { connect } from "react-redux";

import Score from "./Score";
import PlayerName from "./PlayerName";
import style from "./style.scss"; 
/* eslint-enable*/

var ScoreBoard = ({ players }) => (
  <article id="score-board">
    <section className="player-board">
      <PlayerName {...players[0]} />
      <Score {...players[0]} />
    </section>
    <section className="player-board">
      <PlayerName {...players[1]} />
      <Score {...players[1]} />
    </section>
  </article>
);

function mapStateToProps(state) {
  return { players: state.players };
}

ScoreBoard = connect(mapStateToProps)(ScoreBoard);

export default ScoreBoard; 
