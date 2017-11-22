import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/homePage/HomePage';
import SimpleSlider from './components/carousel/Carousel';
import Movie from './components/movie/Movie';
import MovieSearch from './components/movieAPI/MovieSearch';
import SiteFrame from './components/SiteFrame/SiteFrame';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* This is the path to the "SimpleSlider" */}
            <Route path='/SimpleSlider' component={ SimpleSlider }/>
            {/* This is the path to the "Movie" */}
            <Route path='/Movie' component={ Movie }/>
            <Route path='/MovieSearch' component={ MovieSearch }/>
            <Route path='/SiteFrame' component={ SiteFrame }/>
            {/* Root or Home Router should alway be place at bottom to filter
            out bad links. "exact" is not used to improve the filter of links entered */}
            <Route path='/' component={ HomePage } />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
