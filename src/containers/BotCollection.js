import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  // constructor(props){
  //   super(props);
  //
  // }

  render(){
    // console.log("All of the bots passed into the Collection page", this.props.botList)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}

          {this.props.botList.map(bot => <BotCard key={bot.id} bot={bot} selectBot={this.props.selectBot} />)}

    		  Collection of all bots

          HELLO WORLD! THIS IS A TEST
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
