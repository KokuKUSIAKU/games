/* eslint-disable*/
import React from "react";
import { connect } from "react-redux";

import Score from "./Score";
import PlayerName from "./PlayerName";
import style from "./style.scss";
/* eslint-enable*/

var ScoreBoard = ({ players }) => (
  <article id="score-board" className="container">
    <div className="row no-gutters">
      <section id="score-first" className="col-md-6">
        <div className="player-board">
          <PlayerName {...players[0]} />
          <Score {...players[0]} />
        </div>
      </section>
      <section id="score-second" className="col-md-6">
        <div className="player-board">
          <PlayerName {...players[1]} />
          <Score {...players[1]} />
        </div>
      </section>
    </div>
  </article>
);

function mapStateToProps(state) {
  return { players: state.players };
}

ScoreBoard = connect(mapStateToProps)(ScoreBoard);

export default ScoreBoard; 
