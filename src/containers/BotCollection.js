import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  constructor(props) {
    super(props);
    };

  renderBotList(){
    let renderedBots = []
    this.props.bots.forEach(bot => {
      renderedBots.push(<BotCard key={bot.id} value={bot.name} bot={bot}/>)
    })
    return renderedBots
  }

  render() {
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderBotList()}
    		</div>
  	  </div>
  	);
  }
};

export default BotCollection;
