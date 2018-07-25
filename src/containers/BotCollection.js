import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  loadBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard bot={bot} onClick={this.props.onClick}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.loadBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
