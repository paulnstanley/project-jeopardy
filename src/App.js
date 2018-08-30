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
          <h1 className="App-title">Welcome to Jeopardy</h1>
        </header>
        <Column />
      </div>
    );
  }
}

export default App;
