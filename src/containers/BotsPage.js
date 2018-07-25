import React from "react";
import BotCollection from "./BotCollection"

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props){
    super(props);

    this.state = {
      bots: []
    }
  }

  componentDidMount(){
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({bots: data}) )
  }

  render() {
    // console.log("BotsPage with fetch", this.state.bots)
    return (
      <div>
        {/* put your components here */}
        <BotCollection botList={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
