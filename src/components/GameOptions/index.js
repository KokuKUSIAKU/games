/* eslint-disable*/
import React from "react";
import GameOptionComponent from "./GameOption";
import styles from "./style.scss";
/* eslint-enable*/

/*const GameOptions = () => (
  <section id="game-options" className="tsting">
    <GameOptionComponent />
  </section>
);
*/
const GameOptions = () => {
  return React.createElement("section",
    { id: "game-options" },
    React.createElement(GameOptionComponent)
  );
};
export default GameOptions; 