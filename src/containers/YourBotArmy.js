import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  displayAllBots = () => this.props.myBots.map( (bot) => {
		return  <BotCard key={bot.id} bot={bot}/> 
  })
  
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.displayAllBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
