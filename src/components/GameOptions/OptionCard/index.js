import React from "react";
import PropTypes from "prop-types";

class OptionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let {option, controller} = this.props;
    let targetNode = document.getElementById(`option-${option.title}`);
    targetNode.addEventListener("click", controller.bind(this));
  }
  
  render() {
    let {option} = this.props; 
    return (
      <article id={`option-${option.title}`}
        className={`card ${option.classOpt}`}>
        <h3 className="card-header">{option.title}</h3>
        <div className="card-body">
          <div className="card-text">
            <p>{option.text}</p>
          </div>
        </div>
      </article>
    );
  }
}

OptionCard.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionCard; 