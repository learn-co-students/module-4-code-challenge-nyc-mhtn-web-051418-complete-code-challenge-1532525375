import React from "react";
import BotCollection from './BotCollection';
import BotSpecs from '../components/BotSpecs';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props)
    this.state = {
      bots: [],
      army: [],
      clickedBot: "",
    }
  }

  componentDidMount() {
    fetch(' https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({ bots }, () => console.log(this.state)))
  }

  handleArmyBots = (event, id) => {
    const clickedBot = this.state.bots.find(bot => {
      return bot.id === id
    })
    this.setState({
      clickedBot,
    }, () => console.log(this.state.clickedBot))
    // if (!this.state.army.includes(clickedBot)) {
    //   this.setState({
    //     army: [...this.state.army,  clickedBot],
    //   })
    // } else {
    //   const botForRemoval = this.state.army.find(bot => {
    //     return bot.id === id
    //   })
    //   let newArmy = [...this.state.army];
    //   newArmy = newArmy.filter(bot => {
    //     return bot !== botForRemoval
    //   })
    //   this.setState({
    //     army: newArmy,
    //   })
    //
    // }
  }

  goBack = () => {
    this.setState({
      clickedBot: "",
    })
  }

  enlistBot = (event, bot) => {
    this.setState({
      army: [...this.state.army, bot]
    })
  }



  render() {
    if (this.state.clickedBot !== "") {
      return (
        <div>
          <YourBotArmy
            army={this.state.army}
            handleArmyBots={this.handleArmyBots}/>
          <BotSpecs bot={this.state.clickedBot} goBack={this.goBack} enlistBot={this.enlistBot}/>
        </div>
      )
    } else {
    return (
      <div>
        <YourBotArmy army={this.state.army}
          handleArmyBots={this.handleArmyBots}/>
        <BotCollection bots={this.state.bots} handleArmyBots={this.handleArmyBots}/>
      </div>
    );
   }
  }

}

export default BotsPage;
