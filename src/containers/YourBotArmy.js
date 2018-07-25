import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderAllBotsInYourArmyAsCards = () => {
		return this.props.bots.map( (bot) => {
			return <BotCard bot={bot} key={bot.id} id={bot.id} onClick={this.props.onBotClick}/>
		})
	}

  render(){
    console.log("Bot Army Props: ", this.props); 
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderAllBotsInYourArmyAsCards()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
