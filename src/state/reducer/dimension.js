import { DEFAULT_DIMENSION } from "../gameBoard"; 

function dimension(state = DEFAULT_DIMENSION, action){
  if( action.type === "LARGE"){
    return action.dimension;
  }
  return state; 
}

export default dimension; 