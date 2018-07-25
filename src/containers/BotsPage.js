import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'; 
const BOTS_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      bots: [],
      yourBotArmy: []
    };
  }

  handleClickOnBot = (event, botId) => {
    const selectedBot = this.state.bots.find( bot => bot.id === botId); 
    const yourBotArmyCopy = this.state.yourBotArmy.slice(); 
    yourBotArmyCopy.push(selectedBot); 
    if (this.state.yourBotArmy.includes(selectedBot) === false) {
      this.setState({
        yourBotArmy: yourBotArmyCopy
      })
    } 
  }

  removeBotFromArmy = (event, botId) => {
    const selectedBot = this.state.yourBotArmy.find( bot => bot.id === botId); 
    const filteredBotArmy = this.state.yourBotArmy.filter( bot => {
      return bot.id !== selectedBot.id
    })
    this.setState({
      yourBotArmy: filteredBotArmy
    })
  }

  componentDidMount() {
    fetch(BOTS_URL).then( resp => resp.json()).then( botsJson => this.setState({
      bots: botsJson
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBotArmy} onClick={this.removeBotFromArmy}/>
        <BotCollection bots={this.state.bots} onBotClick={this.handleClickOnBot}/>
      </div>
    );
  }

}

export default BotsPage;
