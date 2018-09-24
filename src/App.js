import React, { Component } from 'react';
import sun from './icons8-sun.svg';
import './App.css';
import { Search } from './SearchComponent/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={sun} className="App-logo" alt="logo" />
          <h1 className="App-title">Get your Weather Details</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Search />
      </div>
    );
  }
}

export default App;
