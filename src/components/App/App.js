import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
l
class App extends Component {

  constructor() {
    super();
    this.state = {
history: [],
valueX: '',
    }
    }
  numberX = (newValue) => {
     valueX = {
       num: newValue.num,
       funk: newValue.funk
     }
    console.log('In App.js addFamousPersonToList() with', newValue);
    this.setState({
      
      history: [...this.state.history, newValue],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Famous People</h1>
        </header>
        <CurrentTotal valueX={this.state.valueX}  />
        {/* addFamousPersonToList is passed via props */}
        <EnterNumber valuePlus={this.valuePlus} />
        {/* Dump the information to the page */}
        {JSON.stringify(this.state.famousPeople)}
        <History history={this.state.history} />
      </div>
    );
  }
}


export default App;
