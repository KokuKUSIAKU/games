
import  MESSAGE from "../constants";
import Player from "./player"; 

function Computer(name) {
  Player.call(this, name);
}
Computer.prototype = new Player;
Computer.prototype.constructor = Computer;
Computer.prototype.select = function (requestor, gameBoard) {
  var position = {
    row: parseInt(Math.random() * gameBoard.dimension),
    column: parseInt(Math.random() * gameBoard.dimension)
  };
  this.send(MESSAGE.PLAYED, requestor, position);
};

export default Computer; 