import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../src/views/homePage/HomePage';
import Movie from './components/movie/Movie';

import SiteFrame from '../src/components/siteFrame/SiteFrame';
import MovieSearch from './views/movieSearch/MovieSearch.js';
import LandingPage from './views/landingPage/LandingPage';
import ProfilePage from './views/profilePage/ProfilePage'
// import HomePage from './Views/HomePage/HomePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        
          <Switch>
            <Route path='/Login' exact={true} component={ HomePage } />
            <Route path='/' render={(props)=>
              <SiteFrame> 
               
                  <Route path='/Landing' component={ LandingPage }/>
                  <Route path='/Movie/:movieId' component={ Movie }/>
                  <Route path='/MovieSearch' component={ MovieSearch }/>
                  <Route path='/MyProfile' component={ ProfilePage }/>
                     
              </SiteFrame>
             } />
          </Switch>
        
      </Router>
      </div>
    );
  }
}

export default App;