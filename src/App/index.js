import React from "react";
import { Provider } from "react-redux";

import HOME from "../components/HomePage";
import GameOptions from "../components/GameOptions";
import Welcome from "../components/Welcome";
import ParyLayout from "../components/PartyLayout";
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
        this.setState({
          activeView: (
            <Provider store={store}>
              <ParyLayout />
            </Provider>)
        });
        this.handleClick = function cancelHandleClick() { };
      })
      .catch((e) => {
        alert("error when mounting gameBoard");
        this.handleClick = function cancelHandleClick() { };
        throw (e);
      });
  }
  componentDidMount() {
    Promise.resolve()
      .then(() => this.setState({
        activeView: <Welcome />
      }))
      .then(
      setTimeout(() => this.setState({
        activeView: <GameOptions />
      }), 3000)
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