import React from "react";
import HOME from "../components/HomePage";
import GameBoard from "../components/GameBoard";
import GameOptions from "../components/GameOptions";
import ScoreBoard from "../components/ScoreBoard";
import StartButton from "../components/StartButton";
import Welcome from "../components/Welcome";
import { Provider } from "react-redux";
import store from "../state";
import styles from "./style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: null,
      options: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Promise.resolve()
      .then(() => {
        let gameModule = require("../tictactoe");
        let gameController = gameModule.default;

        this.setState({
          activeView: (
            <Provider store={store}>
              <div className="game-board">
                <ScoreBoard/>
                <GameBoard />
                <StartButton initiator={gameController} />
              </div>
            </Provider>)
        });
        this.handleClick = function cancelHandleClick() {};
      })
      .catch((e) => {
        alert("error when mounting gameBoard");
        this.handleClick = function cancelHandleClick() {};
        throw (e);
      });
  }
  componentDidMount() {
    Promise.resolve()
      .then(() => this.setState({
        activeView: <Welcome />
      }))
      .then(
        setTimeout( () => this.setState({
          activeView:<GameOptions/>
        }),3000)
      );
  }
  render() {
    return (
      <div id="app-container" onClick={this.handleClick.bind(this)}>
        {this.state.activeView}
      </div>
    );
  }
}

export default App;