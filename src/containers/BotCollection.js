import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
    // console.log("All of the bots passed into the Collection page", this.props.botList)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">

          {this.props.botList.map(bot => <BotCard key={bot.id} bot={bot} chosenBot={this.props.chosenBot} />)}

    		  Collection of all bots

          HELLO WORLD! THIS IS A TEST
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
