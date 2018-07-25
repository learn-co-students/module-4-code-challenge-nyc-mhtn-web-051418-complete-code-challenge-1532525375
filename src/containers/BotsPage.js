import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state={
      bots:[],
      userBots:[],
      page: "",
      detailDot: "",

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

// this.setState({
//   page: "show",
//   detailDot: bot,
// })

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

  listing = ()=>{

  if (this.state.page === "show"){
    return (<BotSpecs bot={this.state.detailDot} />)
  }else{
    return (<div>
      <YourBotArmy userbotArmy={this.state.userBots} />
      <BotCollection listOfBots={this.state.bots} addToUserArmy={this.handleAddtoUserArmy}/>
    </div>)
  }
}

  render() {
    return (<div>
      <YourBotArmy userbotArmy={this.state.userBots} />
      <BotCollection listOfBots={this.state.bots} addToUserArmy={this.handleAddtoUserArmy}/>
    </div>)
  }

}

export default BotsPage;
