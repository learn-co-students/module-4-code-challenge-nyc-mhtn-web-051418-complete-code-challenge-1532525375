import React from "react";
import BotCard from "../components/BotCard";
import BotsPage from "./BotsPage";

class BotCollection extends React.Component {
	constructor() {
		super(); 

		this.state = {
			classToFilterBy: ""
		}
	}

	filterBots = () => {
		const currentBotList = this.props.bots.slice(); 
		const filteredBotList = this.props.bots.filter(bot => {
			return(
				bot.bot_class.includes(this.state.classToFilterBy)
			)
		})
	 return filteredBotList
	}
	
	handleBotClassChange = (event) => {
		console.log("Dropdown Value: ", event.target.value);
		this.setState({
			classToFilterBy: event.target.value
		})
	}

	renderAllBotsAsCards = () => {
		return this.filterBots().map( (bot) => {
			return <BotCard bot={bot} key={bot.id} id={bot.id} onClick={this.props.onBotClick}/>
		})
	}

  render(){
		this.filterBots(); 
  	return (
  	  <div className="ui four column grid">
				<label>Filter bots based on class: </label>
			  <select defaultValue="" value={this.state.classToFilterBy} onChange={this.handleBotClassChange}>
			   	<option value="">All</option>
					<option value="Support">Support</option>
					<option value="Assault">Assault</option>
					<option value="Defender">Defender</option>
				</select>
    		<div className="row">
				  {this.renderAllBotsAsCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
