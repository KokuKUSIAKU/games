import store from "../../../state";

var count = 3;

function filterCells(cells) {
  return cells.filter(cell => cell);
}

function getStateBoards() {
  return store.getState().boards;
}

function nDiagonalTest({ row, column }) {
  var ln, board,refValue, refValueOwner, cells, checkList = [];
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
    throw new ReferenceError("Reference value undefined. Make sure you update the state before");
  }

  cells = board.map(function (_row, index) {
    return _row[column + index - row];
  });
  
  cells = filterCells(cells.slice(row - count < 0 ? 0 : row - count + 1, row + count));
  ln = cells.length;

  if (ln < count) { return true; }
  
  for (let i = 0; i <= ln - count; i++) {
    checkList.push(cells.slice(i, i + count));
  }
  
  return !checkList.some(list => list.every(value => value.owner === refValueOwner));
}

export default nDiagonalTest;

