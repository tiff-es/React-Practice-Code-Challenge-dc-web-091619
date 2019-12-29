import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!0
const API = "http://localhost:3000/sushis"

export default class App extends Component {
state = {
    sushis: [],
    eaten: [],
    money: 100,
    displayIndex: 0

}

componentDidMount() {
    fetch(API)
        .then(res => res.json())
        .then(data => this.setState({
            sushis: data
        }))
        .catch(e => alert(e))
}

    chooseFourSushis = () => {
     return  this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex + 4)
}

eat = (sushi) => {
    //changemoney
    const updatedMoney = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && updatedMoney >=0){

        this.setState({
            eaten: [...this.state.eaten, sushi],
            money: updatedMoney
        })
    }
}

more = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4
    this.setState({
        displayIndex: newDisplayIndex
    })
}
// eat(sushiEvent), chooseFourSushis, more(event)
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.chooseFourSushis()}
                        eaten={this.state.eaten}
                        eat={this.eat}
                        more={this.more}

        />
        <Table eaten={this.state.eaten}
               remainingBudget={this.state.money}
        />
      </div>
    );
  }
}


/*

XX Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to
 be concerned about what happens when you reach the end of the sushi list.

XX Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to
 appear on the table.

XX Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the
 developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component

XX Customers cannot eat any sushi that exceeds the amount of money remaining in their balance

App is parent to both SushiContainer and Table

SushiContainer is parent to both Sushi and MoreButton


*/