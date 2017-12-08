import Validator from "./Validator";
import lineTest from "./lineTest";
import columnTest from "./columnTest";
import pDiagonalTest from "./pDiagonalTest";
import nDiagonalTest from "./nDiagonalTest";

var TicTacToeReferee = new Validator();
TicTacToeReferee.rules = [lineTest, columnTest,pDiagonalTest, nDiagonalTest];

export default TicTacToeReferee; 