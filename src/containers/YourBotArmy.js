import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  listUserArmy =(props)=>{
   return this.props.userbotArmy.map(bot=>{
   return (<BotCard bot={bot} />)
  })}

  render(){
    // console.log("check this",this.props.userbotArmy)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.listUserArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
