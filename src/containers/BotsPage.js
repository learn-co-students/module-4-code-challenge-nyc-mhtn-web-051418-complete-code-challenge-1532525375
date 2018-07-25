import React from "react";
import BotCollection from './BotCollection';
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
    console.log("Bot Army Copy :", yourBotArmyCopy); 
    if (this.state.yourBotArmy.includes(selectedBot) === false) {
      this.setState({
        yourBotArmy: yourBotArmyCopy
      })
    } 
  }

  componentDidMount() {
    fetch(BOTS_URL).then( resp => resp.json()).then( botsJson => this.setState({
      bots: botsJson
    }))
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} onBotClick={this.handleClickOnBot}/>
      </div>
    );
  }

}

export default BotsPage;
