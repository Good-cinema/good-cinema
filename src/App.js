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
            <Route path='/Login' exact={true} component={ HomePage } />
            <Route path='/' render={(props)=>
              <SiteFrame/>
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;