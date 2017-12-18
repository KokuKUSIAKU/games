import React from "react";
/*
const Score = ({score}) => (
  <div className="player-score">{score}</div>
); 

*/

function Score({ score }) {
  var scoreBoard, { completed, pending } = score;
  scoreBoard = (
    <div className="row player-score no-gutters">
      <div className="score-complete col-6">{completed}</div>
      {pending!=-1 && <div className="score-complete pending-score col-6">{pending}</div>}
    </div>
  );

  return scoreBoard;
}

export default Score; 