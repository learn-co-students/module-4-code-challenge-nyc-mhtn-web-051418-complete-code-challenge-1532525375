import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderAllBotsInYourArmyAsCards = () => {
		return this.props.bots.map( (bot) => {
			return <BotCard bot={bot} key={bot.id} id={bot.id} onClick={this.props.onClick}/>
		})
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderAllBotsInYourArmyAsCards()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
