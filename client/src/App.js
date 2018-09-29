import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewEntry from './NewEntry'
import UserNames from './UserNames'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://pre00.deviantart.net/4136/th/pre/i/2010/248/e/4/the_thinking_man_by_jonc20-d2y3jlh.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Whats on your mind?</h1>
        </header>
          <body>
        <p className="App-intro">
            <NewEntry/>
            <UserNames/>


        </p></body>
      </div>
    );
  }
}

export default App;
