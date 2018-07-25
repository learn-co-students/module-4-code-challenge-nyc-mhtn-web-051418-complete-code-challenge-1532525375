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
      sortValue: "Name",
      filterBots: [],
      filterBotsClass: [],
      renderFilter:[],
    }
  }
  
  componentDidMount(){
    let url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
    .then(r => r.json())
    .then(json =>
      this.setState({
        allBots: json,
        filterBotsClass: json,
        renderFilter: json,
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
      })
    }
    else {
      return console.log("Enlisted!")
    }
  }

  removeFromMyArmy = (id) => {
    let newArmy = this.state.myBots.filter( (bot) => bot.id !== parseInt(id))
    this.setState({myBots: newArmy})
  }

  //FILTER FUNCTIONALITY
  filterBots = () => {
    let newArmy = this.state.filterBotsClass.filter( (bot) => bot.name.toLowerCase().includes(this.state.nameValue.toLowerCase()))
    this.setState({renderFilter: newArmy}, this.sortBots)
  }
  
  filterBotsClass = (e) => {
    if (e.target.value === "All") {
      return this.setState({
        filterBotsClass: this.state.allBots,
        renderFilter: this.state.allBots,
      }, this.filterBots)
    }
    let newArmy = this.state.allBots.filter( (bot) => bot.bot_class === e.target.value)
    this.setState({
      filterBotsClass: newArmy,
      renderFilter: newArmy,
    }, this.filterBots)
  }

  sortBots = () => {
    let sortedArmy = []
    switch (this.state.sortValue) {
      case "Name":
          sortedArmy = this.state.renderFilter.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
          this.setState({
            renderFilter: sortedArmy,
          })
      break;
      case "Armor":
          sortedArmy = this.state.renderFilter.sort((a, b) => a.armor - b.armor)
          this.setState({
            renderFilter: sortedArmy,
          })
      break;
      case "Health":
          sortedArmy = this.state.renderFilter.sort((a, b) => a.health - b.health)
          this.setState({
            renderFilter: sortedArmy,
          })
      break;
      case "Damage":
        sortedArmy = this.state.renderFilter.sort((a, b) => a.damage - b.damage)
        this.setState({
          renderFilter: sortedArmy,
        })
      break;
    }
  }

  handleSearch = (e) => this.setState({nameValue: e.target.value}, this.filterBots)

  handleSort = (e) => this.setState({sortValue: e.target.value}, this.sortBots)

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
                                        sortValue={this.state.sortValue}
                                        handleSearch={this.handleSearch}
                                        handleSort={this.handleSort}
                                        filterBotsClass={this.filterBotsClass}
                                      />
                                      <BotCollection 
                                        allBots={this.state.renderFilter} 
                                        handleBotSelection={(id, action) => this.handleBotSelection(id, action)}
                                      />
                                    </Fragment>
        }
      </div>
    );
  }

}

export default BotsPage;
