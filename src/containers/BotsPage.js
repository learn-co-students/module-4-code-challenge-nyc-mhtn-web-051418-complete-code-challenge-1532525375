import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'; 
import BotSpecs from '../components/BotSpecs';
const BOTS_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      bots: [],
      yourBotArmy: [],
      showingBotDetailPage: false,
      currentlySelectedBot: null,
    };
  }

  handleClickOnBot = (event, botId) => {
    const selectedBot = this.state.bots.find( bot => bot.id === botId);

    this.setState({
      showingBotDetailPage: true,
      currentlySelectedBot: selectedBot
    })
  }

  goBackToShowingAllBots = () => {
    this.setState({
      showingBotDetailPage: false, 
    })
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

    const onBotDetails = this.state.showingBotDetailPage; 
    let bottomHalfOfPage;
    if (onBotDetails) {
      console.log("Currently Selected Bot: ", this.state.currentlySelectedBot);
      bottomHalfOfPage = <BotSpecs bot={this.state.currentlySelectedBot} goBack={this.goBackToShowingAllBots}/>
    } else {
      bottomHalfOfPage =  <BotCollection bots={this.state.bots} onBotClick={this.handleClickOnBot}/>
    }
    return (
      <div>
        <YourBotArmy bots={this.state.yourBotArmy} onClick={this.removeBotFromArmy}/>
        {bottomHalfOfPage}
      </div>
    );
  }

}

export default BotsPage;
