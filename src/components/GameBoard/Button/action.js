function play(target) {
  const {row, column} = target; 
  return {
    type:"PLAYED", 
    row,  
    column, 
  }; 
}

export default play; 