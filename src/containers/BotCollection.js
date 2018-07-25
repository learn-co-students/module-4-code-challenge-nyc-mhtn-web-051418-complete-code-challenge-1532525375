import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    console.log("All of the bots passed into the Collection page", this.props.botList)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}

          {this.props.botList.map(bot => <BotCard bot={bot} />)}

    		  Collection of all bots

          HELLO WORLD! THIS IS A TEST
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
