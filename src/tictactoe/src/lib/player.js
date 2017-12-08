function Player(name) {
  var _name = name;
  var _symbol = "";
  Object.defineProperty(this, "symbol",
    {
      set: function setSymbol(symbol) { _symbol = symbol; },
      get: function getSymbol() { return _symbol; }
    });
  Object.defineProperty(this, "name",
    {
      get: function getName() { return _name; }
    });
}

Player.prototype.send = function send(message, receiver) {
  receiver.excute(message, this, arguments[2]);
};

Player.prototype.PLAY = function play(requestor, gameboard) {
  return this.select(requestor, gameboard);
};

Player.prototype.excute = function excute(message, from) {
  this[message].call(this, from, ...[].slice.call(arguments, 2));
};


export default Player;