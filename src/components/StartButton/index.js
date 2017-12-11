import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import styles from "./style.scss";

class StartButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initialsed: false,
    };
  }

  componentDidMount() {
    let ctx = this;
    let _button = document.getElementById("start-bt");

    let clickHandler = function clickHandler() {

      if(ctx.state.initialsed) {
        ctx.props.dispatch({
          type:"RESET-BOARD"
        });
      }

      if (!ctx.state.initialsed) {
        ctx.setState({
          initialsed: true
        });
      }
      // pop message here Yes and No case 

      ctx.props.initiator();

    };
    _button.addEventListener("click", clickHandler);
    // _button.addEventListener("click", ctx.props.initiator,{once:true});
  }

  render() {
    return <button id="start-bt">{this.state.initialsed ? "RESTART" : "START"}</button>;
  }
}

StartButton.propTypes = {
  initiator: PropTypes.func.isRequired,
};


export default connect()(StartButton); 