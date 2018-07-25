import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {

 listBotCard =()=>{
  return this.props.listOfBots.map(bot=>{
  return (<BotCard key={bot.id} bot={bot} addToUserArmy={this.props.addToUserArmy}/>)
})}



  render(){
    // console.log(this.props.listOfBots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.listBotCard()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
