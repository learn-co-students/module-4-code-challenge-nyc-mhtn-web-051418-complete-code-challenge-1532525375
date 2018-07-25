import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

  let userSelection = []; //Not ideal. I should not be doing this with State.

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props){
    super(props);

    this.state = {
      bots: [],
      userSelection: []
    }
  }



  chosenBot = (event) => {
    event.persist();
    console.log("You clicked a bot!!!")

    userSelection.push(event.target)
    //
    this.setState( {userSelection: userSelection} )
  }

  componentDidMount(){
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({bots: data}) )
  }

  render() {
    console.log("BotsPage with fetch", this.state.userSelection)
    return (
      <div>
        {/* put your components here */}
        <BotCollection
          botList={this.state.bots}
          chosenBot={this.chosenBot}
          userSelection={this.state.userSelection}
          />
        <YourBotArmy userSelection={this.state.userSelection}/>
      </div>
    );
  }

}

export default BotsPage;
