import React from "react";
import BotCard from "../components/BotCard";
import BotCollection from "./BotCollection";

class YourBotArmy extends React.Component {

  // renderBotArmy = (props) => {
  //   let renderedBots = []
  //   // console.log(this.props)
  //   this.props.botArmy.forEach(bot => {
  //     renderedBots.push(<BotCard key={bot.id} value={bot.name} bot={bot} onClick={this.handleClick}/>)
  //   })
  // }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">


          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
