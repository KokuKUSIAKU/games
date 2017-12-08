/*eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import store from "../../../state";
import { connect } from "react-redux";
import {DBBezier, SQBezier} from "../../graphics";
/*eslint-enable*/

function clickHandler(e, func) {
  e.preventDefault(); 
  func(...[].slice.call(arguments,2));
}
//onClick={clickHandler.bind(this, event, dispatch, {type:"PLAYED",postion:{row, column }})}

var Button = ({content, row, column}) => (
  <button className="game-button"
    data-row={row}
    data-column={column}>
    {!content?null:content.owner =="YOU"?<DBBezier/>:<SQBezier/>}
  </button>
);

Button.propTypes = {
  row:PropTypes.number.isRequired, 
  column:PropTypes.number.isRequired
};

export default Button; 