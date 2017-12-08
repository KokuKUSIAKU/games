import store from "../../../state";

var count = 3; 
function filterCells(cells) {
  return cells.filter(cell => cell);
}

function getStateBoards() {
  return store.getState().boards;
}

function lineTest({ row, column }) {
  var ln, refValue, refValueOwner, board, cells, checkList = [];
  board = getStateBoards();
  refValue = board[row][column];
  refValueOwner = refValue.owner; 
 
  try {
    row = parseInt(row); 
    column = parseInt(column);
  } catch(e) {
    throw TypeError("Unable to convert row or column arguments into safe integer");
  }

  if(!refValue) {
    throw("Reference value undefined. Make sure you update the state before");
  }

  cells = filterCells(board[row].slice(column - count < 0 ? 0 : column - count + 1, column + count));
  ln = cells.length;

  if (ln < count) { return true; }

  for (let i = 0; i <= ln - count; i++) {
    checkList.push(cells.slice(i, i + count));
  }

  return !checkList.some(list => list.every(value => value.owner === refValueOwner));
}

export default lineTest; 