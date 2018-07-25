import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

  let userSelection = []; //Not ideal. I should not be doing this with State. //Put up here because each click would reset the array if the array was declared/assigned as empty in the chosenBot method.

  //Just wanted to get something to display.

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
    //Note: On this method I was having difficult grabbing the entire bot, rather than just one DOM element. I think I was adding my event listener too far down tree and ran out of time.

    event.persist();//only used for testing
    console.log("You clicked a bot!!!")

    userSelection.push(event.target)

    this.setState( {userSelection: userSelection} ) //updating state
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
        <YourBotArmy userSelection={this.state.userSelection}/>
        <BotCollection
          botList={this.state.bots}
          chosenBot={this.chosenBot}
          userSelection={this.state.userSelection}
          />
      </div>
    );
  }

}

export default BotsPage;
