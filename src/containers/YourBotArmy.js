import React from 'react';
import BotCard from '../components/BotCard';

class YourBotArmy extends React.Component {
  renderBotCards = () => {
    return this.props.army.map((bot) => <BotCard key={bot.id} bot={bot} />);
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCards()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
