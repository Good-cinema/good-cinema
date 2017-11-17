import React, { Component } from 'react';
import './App.css';
import SimpleSlider from './components/carousel/Carousel';
import Movie from './components/movie/Movie';
import MovieSearch from './components/movieAPI/MovieSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieSearch />
      </div>
    );
  }
}

export default App;
