import React from "react";
import BotCard from "../components/BotCard";
import BotsPage from "./BotsPage";

class BotCollection extends React.Component {
	constructor() {
		super(); 

		this.state = {
			classToFilterBy: "",
			statToSortBy: "health"
		}
	}

	filterBots = () => {
		const filteredBotList = this.props.bots.filter(bot => {
			return(
				bot.bot_class.includes(this.state.classToFilterBy)
			)
		})
	 return filteredBotList
	}
	
	handleBotClassChange = (event) => {
		this.setState({
			classToFilterBy: event.target.value
		})
	}

	handleSortStatChange = (event) => {
		this.setState({
			statToSortBy: event.target.value,
		}); 
	}

	handleFilteringAndSortingBots = () => {
		const filteredBotList = this.filterBots(this.props.bots);
		return this.sortBots(filteredBotList);
	}

	renderAllBotsAsCards = () => {
		return this.handleFilteringAndSortingBots().map( (bot) => {
			return <BotCard bot={bot} key={bot.id} id={bot.id} onClick={this.props.onBotClick}/>
		})
	}

	sortBots = (botList) => {
		return botList.sort( (botA, botB) => {
			return botB[this.state.statToSortBy] - botA[this.state.statToSortBy]
		})
	}
	

  render(){
		this.handleFilteringAndSortingBots(); 
  	return (
  	  <div className="ui four column grid">
				<label>Filter bots based on class: </label>
			  <select value={this.state.classToFilterBy} onChange={this.handleBotClassChange}>
			   	<option value="">All</option>
					<option value="Support">Support</option>
					<option value="Assault">Assault</option>
					<option value="Defender">Defender</option>
				</select>
				<label>Sort bots based on this stat: </label>
				<select value={this.state.statToSortBy} onChange={this.handleSortStatChange}>
				  <option value="health">Health</option>
					<option value="damage">Damage</option>
					<option value="armor">Armor</option>
				</select>
    		<div className="row">
				  {this.renderAllBotsAsCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
