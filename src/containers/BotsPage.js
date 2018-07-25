import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state={
      bots:[],
      userBots:[],
    }
  }

componentDidMount(){
  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  .then(r=>r.json())
  .then(data=>this.addBots(data))
}
addBots = (data) => {
  this.setState({
    bots: data
  })
}

handleAddtoUserArmy = (event,bot) => {
  event.preventDefault()



const check = this.state.userBots.find(botAmry=>{
  return botAmry.id === bot.id
})
if (!check){
  const myArmy = this.state.userBots.slice()
        myArmy.push(bot)
        console.log("check",myArmy)
        console.log("see this", this.state.userBots)
        this.setState({
          userBots: myArmy,
        })
}
}

  render() {
    console.log("need to see",this.state.userBots)
    return (
      <div>
        <YourBotArmy userbotArmy={this.state.userBots} />
        <BotCollection listOfBots={this.state.bots} addToUserArmy={this.handleAddtoUserArmy}/>
      </div>
    );
  }

}

export default BotsPage;
