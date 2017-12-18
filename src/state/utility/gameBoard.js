function buildGameBoard(dim) {
  return Array(dim).fill(undefined).map(
    () => Array(dim).fill(undefined));
} 

export default buildGameBoard;