function updateScore(player,scoreIncrement){
  var {name, score} = player; 
  var {completed, pending} = score; 
  if(!Number(scoreIncrement) || !Number.isSafeInteger(scoreIncrement)){
    throw new TypeError("second argument must be a safe integer");
  }
  pending += scoreIncrement; 
  return {
    name,
    score:{
      completed,
      pending
    }
  }; 
}

function players(state = [], action) {
  var newState, index;
  switch (action.type) {
    case "ADD-PLAYER":
      return [...state, action.newPlayer];
    case "UPDATE-SCORE":
      newState = [...state];
      index = newState.findIndex(player => player.name === action.player.name);
      newState[index] = updateScore(newState[index],action.additionalScore);
      return newState; 
    default:
      return state;
  }
}

export default players; 