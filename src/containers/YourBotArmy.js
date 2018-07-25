import React from "react";
import BotArmyCard from "../components/BotArmyCard";

class YourBotArmy extends React.Component {
  
  botGenerator = () => {
		return this.props.chosenBots.map(bot => {
			return(
				<BotArmyCard key={bot.id} bot={bot} removeFromArmy={this.props.removeFromArmy}/>
			)
		})
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.botGenerator()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
