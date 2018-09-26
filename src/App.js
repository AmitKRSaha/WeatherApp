import React, { Component } from 'react';
import sun from './icons8-sun.svg';
import './App.css';
import { Search } from './SearchComponent/Search';

class App extends Component {

  constructor(){
    super();
    this.searchWeatherreport =  this.searchWeatherreport.bind(this);
  }

  searchWeatherreport(val) {
        if(val !== null && val !== undefined && val !== ""){
          alert(val);
        } else {
          alert('No Value Passed' + val);
        }
  }

  render() {
    return (
      <div className="App Container">
        <header className="App-header">
          <img src={sun} className="App-logo" alt="logo" />
          <h1 className="App-title">Get your Weather Details</h1>
        </header> 
        <div className="container">   
          <Search searchWeatherreport = {this.searchWeatherreport}/>
        </div>
      </div>
    );
  }
}

export default App;
