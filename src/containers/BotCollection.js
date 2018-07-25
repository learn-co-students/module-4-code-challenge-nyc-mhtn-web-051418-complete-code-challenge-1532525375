import React from "react";
import BotCard from "../components/BotCard";
import BotsPage from "./BotsPage";

class BotCollection extends React.Component {
	renderAllBotsAsCards = () => {
		return this.props.bots.map( (bot) => {
			return <BotCard bot={bot} key={bot.id} id={bot.id} onClick={this.props.onBotClick}/>
		})
	}

  render(){
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
