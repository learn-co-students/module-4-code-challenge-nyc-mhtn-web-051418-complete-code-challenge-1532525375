import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);

    //set initial state of all bots to be empty
    this.state = {
      bots: [],
      botArmy: [],
    };
  }

  //fetch bots
  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(json => this.setState({
      bots: json,
    }))
  }

  //We will listen for a bot clicked, and that bot back up
  handleBotClick = (event, selectedBot) => {

    //copy botarmy and update it with new selected bot
    let updatedBotArmy = [...this.state.botArmy, selectedBot]
    this.setState({
      botArmy: updatedBotArmy,
    })
  }

  handleArmyBotClick = (event, selectedBot) => {
    //take the clicked army bot out of the army
    let updatedBotArmy;

    //filter out selected bot
    updatedBotArmy = this.state.botArmy.filter(bot => {
      return bot !== selectedBot
    })

    //update state
    this.setState({
      botArmy: updatedBotArmy,
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} onClick={this.handleArmyBotClick}/>
        <BotCollection bots={this.state.bots} onClick={this.handleBotClick}/>
      </div>
    );
  }

}

export default BotsPage;
