import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props)
    this.state = {
      bots: [],
      army: [],
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
    if (!this.state.army.includes(clickedBot)) {
      this.setState({
        army: [...this.state.army,  clickedBot],
      })
    } else {
      const botForRemoval = this.state.army.find(bot => {
        return bot.id === id
      })
      let newArmy = [...this.state.army];
      newArmy = newArmy.filter(bot => {
        return bot !== botForRemoval
      })
      this.setState({
        army: newArmy,
      })

    }
  }



  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army}
          handleArmyBots={this.handleArmyBots}/>
        <BotCollection bots={this.state.bots} handleArmyBots={this.handleArmyBots}/>
      </div>
    );
  }

}

export default BotsPage;
