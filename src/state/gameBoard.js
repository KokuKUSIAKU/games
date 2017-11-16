import React from "react";

const DEFAULT_DIMENSION = 3;
const buildGameBoard = (dim = DEFAULT_DIMENSION) => Array(dim).fill(undefined).map(
  () => Array(dim).fill(undefined));

export { DEFAULT_DIMENSION, buildGameBoard }; 