import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	displayAllBots = () => this.props.allBots.map( (bot) => {
		return  <BotCard key={bot.id} bot={bot} handleBotSelection={(id) => this.props.handleBotSelection(id)}/> 
	})

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
					{this.displayAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
