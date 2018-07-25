import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}

            {this.props.botList.map(bot => <BotCard bot={bot} />)}

            Your Bot Army
            TEST TEST TEST THIS SHOULD BE YOUR BOT ARMY!!!
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;


// {this.props.userSelection.map(bot => <BotCard bot={bot} />)}
