import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  loadBotCards = () => {
    return this.props.botArmy.map(bot => {
      return <BotCard bot={bot} onClick={this.props.onClick}/>
    })
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.loadBotCards()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
