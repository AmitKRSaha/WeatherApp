import React, { Component } from 'react';
import sun from './icons8-sun.svg';
import './App.css';
import { Search } from './SearchComponent/Search';

class App extends Component {
  render() {
    return (
      <div className="App Container">
        <header className="App-header">
          <img src={sun} className="App-logo" alt="logo" />
          <h1 className="App-title">Get your Weather Details</h1>
        </header> 
        <div className="container">   
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
