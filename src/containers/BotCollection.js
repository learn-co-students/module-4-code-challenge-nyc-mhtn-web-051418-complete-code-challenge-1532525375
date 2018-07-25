import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	
	botGenerator = () => {
		return this.props.bots.map(bot => {
			return(
				<BotCard key={bot.id} bot={bot} addToArmy={this.props.addToArmy}/>
			)
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.botGenerator()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
