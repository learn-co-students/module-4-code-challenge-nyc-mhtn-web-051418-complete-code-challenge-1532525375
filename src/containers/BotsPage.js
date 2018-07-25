import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props) {
    super(props)

    this.state = {
      allBots: [],
      selectedInBot: [],
      myBots: [],
    }
  }
  
  componentDidMount(){
    let url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
    .then(r => r.json())
    .then(json =>
      this.setState({
        allBots: json
      })
    )
  }

  handleBotSelection = (id) => {
    let selectedBot = this.state.allBots.find( (bot) => bot.id === parseInt(id))
    this.setState({selectedInBot: selectedBot}, () => this.addBotToMyArmy(id) )
  }

  addBotToMyArmy = (id) => {
    if (this.state.myBots.find( (bot) => bot.id === parseInt(id)) === undefined ) {
      let newArmy = [...this.state.myBots, this.state.selectedInBot]
      this.setState({myBots: newArmy}, () => console.log("myarmy", this.state.myBots))
    }
    else {
      return console.log("Enlisted!")
    }
  }

  removeFromMyArmy

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy myBots={this.state.myBots}/>
        <BotCollection allBots={this.state.allBots} handleBotSelection={(id) => this.handleBotSelection(id)}/>
      </div>
    );
  }

}

export default BotsPage;
