import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
