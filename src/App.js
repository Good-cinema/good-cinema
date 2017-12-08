import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <Router>
        <div className="App">
          <Switch>
            <Route path='/Login' exact={true} component={ HomePage } />
            <Route path='/' render={(props)=>
              <SiteFrame history={props.history/*This code allows me to redirect to the search results when using the search box in the header*/}> 
               
                  <Route path='/Landing' component={ LandingPage }/>
                  <Route path='/Movie/:movieId' component={ Movie }/>
                  <Route path='/MovieSearch' component={ MovieSearch }/>
                  <Route path='/MyProfile' component={ ProfilePage }/>
                     
              </SiteFrame>
             } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;