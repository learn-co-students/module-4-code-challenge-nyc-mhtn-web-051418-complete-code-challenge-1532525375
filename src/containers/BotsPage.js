import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    chosenBots:[]
  }
  componentDidMount(){
    const getURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';
    fetch(getURL).then(res=>res.json()).then(json=> {
      this.setState({
        bots: json
      })
    })
  }

  addToArmy = (event,clickedBot) => {
    // Looks for a bot.id that matches the id of the clicked bot
    const botMatch = this.state.chosenBots.find(bot => {
      return bot.id === clickedBot
    })
    // If there is no match then convert the clickedBot from only having a property of id to having all bot properties
    if (!botMatch) {
      clickedBot = this.state.bots.find(bot => {
        return bot.id === clickedBot
      })
      this.setState({
        chosenBots: [...this.state.chosenBots,clickedBot]
      })
    }
  }

  removeFromArmy = (event,clickedBot) => {
    const botIndex = this.state.chosenBots.findIndex(bot => {
      return bot.id === clickedBot
    })
    const newBotArmy = this.state.chosenBots.filter(bot => {
      return bot.id !== clickedBot
    })
    this.setState({
      chosenBots: newBotArmy
    })
  }

  render() {
    console.log('chosen bots',this.state.chosenBots)
    return (
      <div>
        <YourBotArmy chosenBots={this.state.chosenBots} removeFromArmy={this.removeFromArmy}/>
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
