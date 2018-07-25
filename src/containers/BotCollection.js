import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props);
    //set initial state
    this.state = {
      bots: [],
      botArmy: []
    };
  }
  renderBotList(){
    let renderedBots = []
    this.props.bots.forEach(bot => {
      renderedBots.push(<BotCard key={bot.id} value={bot.name} bot={bot} onClick={this.props.onClick} botArmy={this.state.botArmy}/>)
    })
    return renderedBots
  }

  handleClick = (event) => {
    let selectedBots = []
    selectedBots.push(event.target.value)
    this.setState({
      botArmy: selectedBots
    })

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
