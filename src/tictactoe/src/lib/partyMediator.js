//import update from "../state/update";
import store from "../../../state";
/****************************************
 * Match and PartyMediator
 ***************************************/
const PLAY_LIMIT = Math.pow(store.getState().dimension, 2);

const MESSAGE = {
  PLAY: "PLAY",
  PLAYED: "PLAYED",
  CONTINUE: "CONTINUE",
  STOP: "STOP",
  WINNED: "WINNED",
  ACCEPT: "ACCEPT",
  REJECT: "REJECT",
  VALIDATE: "VALIDATE"
};


function PartyMediator() {
  const ctx = this;
  const FUNCTION_REGISTRY = {
    PLAYER: ctx.addPlayer,
    VALIDATOR: ctx.addValidator,
    VIEW: ctx.addView,
    REFEREE: ctx.addReferee,
  };
  var _currentPlayer = null;
  var _participants = {
    players: [],
    validator: null,
    referee: null,
    view: null
  };
  //should not be public 
  this.count = 1;

  Object.defineProperty(this, "players", { get: function getPlayers() { return _participants.players; } });
  Object.defineProperty(this, "currentPlayer",
    {
      get: function getCurrentPlayers() { return _currentPlayer; },
      set: function setCurrentPlayers(player) { _currentPlayer = player; }
    });
  Object.defineProperty(this, "validator",
    {
      get: function getValidator() { return _participants.validator; },
      set: function setValidor(validator) { _participants.validator = validator; }
    });
  Object.defineProperty(this, "view",
    {
      get: function getView() { return _participants.view; },
      set: function setView(view) { _participants.view = view; }
    });
  Object.defineProperty(this, "referee",
    {
      get: function getReferee() { return _participants.referee; },
      set: function setReferee(referee) { _participants.referee = referee; }
    });
  Object.defineProperty(this, "add",
    {
      set: function addParticipant({ type, participant }) {
        // set error message here for instance when type doesn't exist
        FUNCTION_REGISTRY[type].call(this, participant);
      }
    });
}

PartyMediator.prototype.addPlayer = function addPlayer(player) {
  this.players.push(player);
  this.last = player;
};

PartyMediator.prototype.addReferee = function addReferee(referee) {
  this.referee = referee;
};

PartyMediator.prototype.addValidator = function addValidator(validator) {
  this.validator = validator;
};

PartyMediator.prototype.addView = function addView(view) {
  this.view = view;
};

PartyMediator.prototype.addParticipants = function add(participants) {
  for (let key in participants) {
    this.add = participants[key];
  }
};

PartyMediator.prototype.send = function (message, receiver) {
  receiver.excute(message, this, ...[].slice.call(arguments, 2));
};

PartyMediator.prototype.excute = function (message, from) {
  // change here also to use mapping something like 
  // onMESSAGEFROM
  let ctx = this;

  function makePlayNextPlayer() {
    let nextIndex = ctx.players.indexOf(ctx.currentPlayer);
    if (nextIndex < ctx.players.length - 1) {
      ctx.currentPlayer = ctx.players[nextIndex + 1];
    } else {
      ctx.currentPlayer = ctx.players[0];
    }
    ctx.count++;
    if (ctx.count < PLAY_LIMIT) {
      ctx.send(MESSAGE.PLAY, ctx.currentPlayer, ctx.view);
    }
  }

  if (from === this.referee) {
    switch (message) {
      case MESSAGE.REJECT:
        // if current player realise  winning combinaison, opposite is reject below
        // increase current player score, 
        // animate the winning combination 
        alert(`${this.currentPlayer.name} wins, Bravo!`);
        store.dispatch({
          type:"UPDATE-SCORE", 
          player:this.currentPlayer,
          additionalScore:1
        });

        makePlayNextPlayer();
        break;
      case MESSAGE.ACCEPT:
        makePlayNextPlayer();
        break;
    }
  }

  else if (from === this.validator) {
    switch (message) {
      case MESSAGE.ACCEPT:
        store.dispatch({
          type: "UPDATE",
          position: arguments[2],
          owner: this.currentPlayer.name
        });
        this.send(MESSAGE.VALIDATE, this.referee, arguments[2]);
        break;
      case MESSAGE.REJECT:
        console.log("rejection");
        this.send(MESSAGE.PLAY, this.currentPlayer, this.view);
        break;
    }
  } else if (message === MESSAGE.PLAYED && this.players.includes(from)) {
    this.send(MESSAGE.VALIDATE, this.validator, arguments[2]);
  }
};

PartyMediator.prototype.init = function initiateParty() {
  this.currentPlayer = this.players[0];
  this.send(MESSAGE.PLAY, this.currentPlayer, this.view);
};

export { MESSAGE };
export default PartyMediator;

