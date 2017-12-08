import React from "react";
import PropTypes from "prop-types";
import styles from "./style.scss";

class StartButton  extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    let ctx = this; 
    let _button = document.getElementById("start-bt"); 
    _button.addEventListener("click", ctx.props.initiator,{once:true});
  }

  render(){
    return <button id="start-bt">START</button>; 
  }
}

StartButton.propTypes = {
  initiator: PropTypes.func.isRequired,
};

export default StartButton; 