import React from "react";
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);
    this.state = {
      bots: []
    };
  }

  //fetch bots
  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(json => this.setState({
      bots: json,
    }))
  }

  render() {
    return (
      <div>
        {<BotCollection bots={this.state.bots}/>}
      </div>
    );
  }

}

export default BotsPage;
