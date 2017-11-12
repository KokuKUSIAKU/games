import React from "react";
require("./landingPage.scss");

function LandingPage() {
  var message = {};

  function wellcome() {
    message = <h1 className="landing-page-header"> Wellcome to Tic-Tac-Toe</h1>;
    setTimeout(showGameOption,2000);
  }

  function showGameOption() {
    console.log("fire");
    message = <h1 className="landing-page-header"> GAME OPTION </h1>;
  }

  wellcome(); 

  return (
    <article id="landing-page">
      {message}
    </article>
  );
}

export default LandingPage;

/*
class LandingPage extends React.Component {
  constructor(props){
    super(props); 
    this.state ={
      content:null,
    }; 
  }

  wellcome(){
    return <h1 className="landing-page-header"> Wellcome to Tic-Tac-Toe</h1>; 
  }

  showGameOption() {

  }

  componentDidMount (){
    this.setState({
      content:this.wellcome()
    }); 
  }
  render() {
    return (
      <article id="landing-page">
        {this.state.content}
      </article>
    );
  }
}

*/