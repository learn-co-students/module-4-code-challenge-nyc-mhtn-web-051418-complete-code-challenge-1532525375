import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	renderAllBotsAsCards = () => {
		return this.props.bots.map( (bot) => {
			return <BotCard bot={bot} />
		})
	}

  render(){
		console.log("BotCollection's Bots:", this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				  {this.renderAllBotsAsCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
