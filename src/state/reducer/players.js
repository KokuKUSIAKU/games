function players(state = [], action) {
  var newState, index;
  switch (action.type) {
    case "ADD-PLAYER":
      return [...state, action.newPlayer];
    case "UPDATE-SCORE":
      newState = [...state];
      index = newState.findIndex(player => player.name === action.player.name);
      newState[index] = Object.assign({}, newState[index], { score: newState[index].score + action.additionalScore }); 
      return newState; 
    default:
      return state;
  }
}

export default players; 