import React, { Component } from 'react';
import './App.css';
import Board from './components/Board.js';
import Column from './components/Column.js';

class App extends Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Column />
      </div>
    );
  }
}

export default App;
