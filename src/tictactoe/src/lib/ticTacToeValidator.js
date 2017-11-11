import store from "../../../state";
import Validator from "./Validator"; 

function isEmptyField({row,column}) {
  var board = store.getState().boards;
 
  try { 
    return !board[row][column]; 
  }catch(e) {
    return false; 
  }
}

var TicTacToeValidator = new Validator();
TicTacToeValidator.rules = [isEmptyField]; 

export default TicTacToeValidator; 