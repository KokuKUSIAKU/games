
import React from "react";
import { Provider } from "react-redux";
import {
  GameOptions,
  Welcome,
  PartyLayout,
  PageHeader,
  Rules,
  Warning
} from "../components";

import store from "../state";
import styles from "./style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: null,
      options: null,
    };
  }

  mountGameBoard() {
    Promise.resolve()
      .then(() => this.setActiveView(GameOptions))
      .then(() => {
        let targetNode = document.getElementById("game-options");
        targetNode.addEventListener("click", this.drawLayout.bind(this));
      });
  }

  setActiveView(targetView) {
    this.setState({
      activeView: React.createElement(targetView)
    });
  }

  drawLayout() {
    Promise.resolve()
      .then(() => {
        this.setState({
          activeView: (
            <Provider store={store}>
              <PartyLayout />
            </Provider>)
        });
      })
      .catch((e) => {
        alert("error when mounting gameBoard");
        throw (e);
      });
  }

  componentDidMount() {
    this.setState({
      activeView: <Welcome />
    });
  }

  render() {
    return (
      <div id="app-container">
        <PageHeader />
        <ul id="menu">
          <li onClick={this.setActiveView.bind(this, Welcome)}>HOME</li>
          <li onClick={this.mountGameBoard.bind(this)}>PLAY</li>
          <li onClick={this.setActiveView.bind(this, Rules)}>RULES</li>
        </ul>
        {this.state.activeView}
      </div>
    );
  }
}

export default App;