import React, { Component } from 'react';
import './App.css';
import SimpleSlider from './components/carousel/Carousel';
import Movie from './components/movie/Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />
      </div>
    );
  }
}

export default App;
