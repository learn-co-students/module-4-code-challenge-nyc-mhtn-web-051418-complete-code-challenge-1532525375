import React from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bots: [],
      // selectedBot: '',
      army: [],
    };
  }

  componentDidMount() {
    this.getBots();
  }

  getBots = () =>
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then((res) => res.json())
      .then((bots) =>
        this.setState({
          bots,
        }),
      );

  handleSelectedBot = (selectedBot) => {
    if (this.findifBotExists(selectedBot.id) === undefined) {
      this.setState({ army: [...this.state.army, selectedBot] });
    }
  };

  findifBotExists = (botId) => {
    return this.state.army.find((bot) => bot.id == botId);
  };

  renderBotArmy = () => {
    if (this.state.army.length > 1) {
      return <YourBotArmy army={this.state.army} />;
    } else {
      return (
        <div>
          <h1>Please click on a bot to enlist him to your Army!</h1>
          <br />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderBotArmy()}
        <BotCollection
          onBotSelect={this.handleSelectedBot}
          bots={this.state.bots}
        />
      </div>
    );
  }
}

export default BotsPage;
