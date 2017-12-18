function initialisePlayers() {
  var pending = process.env.NODE_ENV != "production"?0:-1 ;

  return  [
    {
      name:"YOU",
      score:{
        completed:0,
        pending
      }
      
    },
    {
      name:"COMPUTER",
      score:{
        completed:0,
        pending
      }
    }
  ];
}

export default initialisePlayers; 