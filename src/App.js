import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/homePage/HomePage';
import SimpleSlider from './components/carousel/Carousel';
import Movie from './components/movie/Movie';

import SiteFrame from './components/SiteFrame/SiteFrame';
import MovieSearch from './components/movieAPI/MovieSearch';

// import HomePage from './Views/HomePage/HomePage';

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
            {/* This is the path to the "SiteFrame" */}
            <Route path='/SiteFrame' component={ SiteFrame } />
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
