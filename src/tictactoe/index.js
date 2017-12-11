import React from "react";
import Computer from "./src/lib/computer";
import Person from "./src/lib/person";
import PartyMediator from "./src/lib/PartyMediator";
import TicTacToeValidator from "./src/lib/TicTacToeValidator";
import TicTacToeReferee from "./src/lib/TicTacToeReferee";
import store from "../state";

// split the game initialistation
// and the store update with player features 

function tictactoe() {
  console.log("tictactoe fired");
  var gameBoard = {
    view: document.getElementById("game"),
    dimension: store.getState().dimension
  };
  var person = new Person("YOU");
  var computer = new Computer("COMPUTER");
  var tictactoeMediator = new PartyMediator();
  var Mediator = tictactoeMediator;

  person.symbol = React.createElement("i", { className: "fa fa-asterisk", "aria-hidden": "true" });
  computer.symbol = React.createElement("i", { className: "fa fa-dot-circle-o", "aria-hidden": "true" });

  Mediator.addParticipants({
    0: { type: "PLAYER", participant: person },
    1: { type: "PLAYER", participant: computer },
    2: { type: "VALIDATOR", participant: TicTacToeValidator },
    3: { type: "REFEREE", participant: TicTacToeReferee },
    4: { type: "VIEW", participant: gameBoard }
  });
  
  /*
  store.dispatch({
    type: "ADD-PLAYER",
    newPlayer: {
      name: person.name, 
      score:0,
    }
  }); 

  store.dispatch({
    type: "ADD-PLAYER",
    newPlayer: {
      name: computer.name, 
      score:0,
    }
  });

*/
  /* // move to view logic 
   function startButtonClickHandler() {
     Mediator.init();
   }
 */
  Mediator.init();

}


export default tictactoe; 