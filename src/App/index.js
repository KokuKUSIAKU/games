import React from "react"; 
import HOME from "../components/HomePage";
import GameBoard from "../components/GameBoard"; 
import { Provider } from "react-redux";
import store from "../state";
import styles from "./style.scss";

class App extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      activeView:null,
      options:null, 
    }; 
    this.handleClick = this.handleClick.bind(this);
  }

  slideStade() {
    Promise.resolve()
      .then(() => this.setState({ activeView: <Wellcome /> }))
      .then(() => setTimeout(() => this.setState({ activeView: <GameOptions /> }), 3000));
  }
  
  handleClick(e) {
    console.log(e.target); 
    // handle excpetion on wellcome page !
    this.setState({

      activeView:(<Provider store ={store}><GameBoard/></Provider>)
    }); 
  }
  componentDidMount() {
    this.setState({ 
      activeView:<HOME />
    });
  }

  render(){
    return (
      <div className="app-container" onClick={this.handleClick}>
        {this.state.activeView}
      </div>
    ); 
  }
}

export default App;