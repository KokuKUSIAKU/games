import React from "react";
import HomeComponent from "./home";
import GameOptions from "./GameOptions";
import Wellcome from "./Wellcome";
import styles from "./style.scss";

class HOME extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: null,
    };
  }

  componentDidMount() {
    Promise.resolve()
      .then(() => this.setState({ activeView: <Wellcome /> }))
      .then(() => setTimeout(() => this.setState({ activeView: <GameOptions /> }), 3000));
  }

  render() {
    return (
      <section id="home-page">
        {this.state.activeView}
      </section>
    );
  }
}

export default HOME; 