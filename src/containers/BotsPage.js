import React, {Component, Fragment} from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
import Filters from './Filters'

class BotsPage extends Component {
  //start here with your code for step one

  constructor(props) {
    super(props)

    this.state = {
      allBots: [],
      selectedInBot: [],
      myBots: [],
      specsView: false,

      nameValue: "",
      filterBots: [],
    }
  }
  
  componentDidMount(){
    let url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
    .then(r => r.json())
    .then(json =>
      this.setState({
        allBots: json,
        filterBots: json,
      })
    )
  }

  //CORE FUNCTIONALITY

  handleSpecsView = () => this.setState({specsView: false})

  handleBotSelection = (id, action) => {
    let selectedBot = this.state.allBots.find( (bot) => bot.id === parseInt(id))
    this.setState({
      selectedInBot: selectedBot,
      specsView: action === "enlist" ? true : false,
    }, () => action === "remove" ? this.removeFromMyArmy(id) : null )
  }

  addBotToMyArmy = (id) => {
    if (this.state.myBots.find( (bot) => bot.id === parseInt(id)) === undefined ) {
      let newArmy = [...this.state.myBots, this.state.selectedInBot]
      this.setState({
        myBots: newArmy,
        specsView: false,
      }, () => console.log("myarmy", this.state.myBots))
    }
    else {
      return console.log("Enlisted!")
    }
  }

  removeFromMyArmy = (id) => {
    let newArmy = this.state.myBots.filter( (bot) => bot.id !== parseInt(id))
    this.setState({myBots: newArmy}, () => console.log("myarmy", this.state.myBots))
  }

  //FILTER FUNCTIONALITY
  filterBots = () => {
    let newArmy = this.state.allBots.filter( (bot) => bot.name.toLowerCase().includes(this.state.nameValue.toLowerCase()))
    this.setState({filterBots: newArmy}, () => console.log("filterBots", this.state.myBots))
  }

  filterBotsClass = (e) => {
    let newArmy = this.state.filterBots.filter( (bot) => bot.bot_class === e.target.value)
    this.setState({filterBots: newArmy}, () => console.log("filterBots", this.state.myBots))
  }

  handleSearch = (e) => this.setState({nameValue: e.target.value}, this.filterBots)

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy myBots={this.state.myBots} handleBotSelection={(id, action) => this.handleBotSelection(id, action)}/>
        {this.state.specsView ?  <BotSpecs 
                                    bot={this.state.selectedInBot} 
                                    handleSpecsView={this.handleSpecsView}
                                    addBotToMyArmy={(id) => this.addBotToMyArmy(id)}
                                  /> 
        : 
                                    <Fragment>
                                      <Filters 
                                        nameValue={this.state.nameValue}
                                        handleSearch={this.handleSearch}
                                        filterBotsClass={this.filterBotsClass}
                                      />
                                      <BotCollection 
                                        allBots={this.state.filterBots} 
                                        handleBotSelection={(id, action) => this.handleBotSelection(id, action)}
                                      />
                                    </Fragment>
        }
      </div>
    );
  }

}

export default BotsPage;
