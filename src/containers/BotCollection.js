import React, { Component, Fragment } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  loadBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard bot={bot} />
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.loadBotCards()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
