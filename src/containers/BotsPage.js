import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props) {
    super(props);
    //set initial state
    this.state = {
      bots: [],
      clickedBot: false
    };

    // componentDidMount() {
    //   this.fetchData();
    // }

    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(request => request.json())
      .then(json => this.setState({
        bots: json,
      }));
  }

    handleClick = () => {
      console.log(this.state)
    }


  render() {
    return (
      <div>
        <YourBotArmy />
        <BotCollection bots={this.state.bots} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default BotsPage;
