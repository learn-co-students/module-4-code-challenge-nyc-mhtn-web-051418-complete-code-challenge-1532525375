import React from "react";
import BotCollection from './BotCollection';
const BOTS_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      bots: []
    };
  }

  componentDidMount() {
    fetch(BOTS_URL).then( resp => resp.json()).then( botsJson => this.setState({
      bots: botsJson
    }))
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
