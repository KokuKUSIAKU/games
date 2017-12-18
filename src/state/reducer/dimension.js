import { DEFAULT_DIMENSION } from "../constants";

function dimension(state = DEFAULT_DIMENSION, action) {
  switch (action.type) {
    case "LARGE":
      return action.dimension;
    case "SIMPLE":
      return DEFAULT_DIMENSION;
    default:
      return state;
  }

}

export default dimension; 