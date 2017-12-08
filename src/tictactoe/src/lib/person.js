import MESSAGE from "../constants";
import Player from "./player";

function Person(name) {
  Player.call(this, name);
}

Person.prototype = new Player;
Person.prototype.constructor = Person;
Person.prototype.select = function (requestor, gameBoard) {
  const ctx = this;

  function clickHandler(e) {
    var  {row, column} = e.target.dataset;
    console.log("row", row, "column", column);
    if( row && column ) {
      ctx.send(
        MESSAGE.PLAYED, requestor, { row, column}
      );
    } else {
      throw("Game Board button has no data-row or data-column attribute"); 
    }

  }

  gameBoard.view.addEventListener("click", clickHandler, { once: true });

};

export default Person; 