
import store from "../../../state";
import MESSAGE from "../constants";

const PLAY_LIMIT = Math.pow(store.getState().dimension, 2);

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
        if(!FUNCTION_REGISTRY[type]){ throw new TypeError(`The ${type} type can't be added to the participants registry`)}
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
  let ctx = this;
  let messageHandlerStack = [];

  messageHandlerStack.include = function include(handler) {
    this.push(handler);
  };

 
  function excuteMessageFromReferee(requestor, message) {
    if (requestor == ctx.referee) {
      switch (message) {
        case MESSAGE.REJECT:
          Promise.resolve()
            .then(() => dispatchUpdateScore())
            .then(() => makePlayNextPlayer());
          break;
        case MESSAGE.ACCEPT:
          makePlayNextPlayer();
          break;
        default:
          throw new TypeError("Action request from Referee can't be handle by the listener");
      }
    }

    return ctx;
  }

  function excuteMessageFromValidator(requestor, message) {
    if (requestor == ctx.validator) {
      switch (message) {
        case MESSAGE.ACCEPT:
          store.dispatch({
            type: "UPDATE",
            position: arguments[2],
            owner: ctx.currentPlayer.name
          });
          ctx.send(MESSAGE.VALIDATE, ctx.referee, arguments[2]);
          break;
        case MESSAGE.REJECT:
          ctx.send(MESSAGE.PLAY, ctx.currentPlayer, ctx.view);
          break;
        default:
          throw new TypeError("Action request from Validator can't be handle by the listener");
      }
    }

    return ctx;

  }

  function excuteMessageFromPlayer(requestor, message) {
    if (message === MESSAGE.PLAYED && ctx.players.includes(from)) {
      ctx.send(MESSAGE.VALIDATE, ctx.validator, arguments[2]);
    }

    return ctx;
  }

  function dispatchUpdateScore() {
    return store.dispatch({
      type: "UPDATE-SCORE",
      player: ctx.currentPlayer,
      additionalScore: 1
    });
  }

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

  messageHandlerStack.include(excuteMessageFromReferee);
  messageHandlerStack.include(excuteMessageFromValidator);
  messageHandlerStack.include(excuteMessageFromPlayer);

  // loop through all hanlders to excute the message 
  messageHandlerStack.forEach(handler => handler(from, message, ...[].slice.call(arguments, 2)));

};


PartyMediator.prototype.init = function initiateParty() {
  this.currentPlayer = this.players[0];
  this.send(MESSAGE.PLAY, this.currentPlayer, this.view);
};

export { MESSAGE };
export default PartyMediator;

