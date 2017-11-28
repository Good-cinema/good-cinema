import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/homePage/HomePage';
import SimpleSlider from './components/Carousel/Carousel';
import Movie from './components/movie/Movie';

import SiteFrame from './components/SiteFrame/SiteFrame';
import MovieSearch from './views/MovieSearch/MovieSearch.js';
import LandingPage from './views/LandingPage/LandingPage';
import ProfilePage from './views/ProfilePage/ProfilePage'
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
              <SiteFrame>
                <Switch>
                  {/* This is the path to the "SimpleSlider" */}
                  <Route path='/SimpleSlider' component={ SimpleSlider }/>
                  <Route path='/Landing' component={ LandingPage }/>
                  {/* This is the path to the "Movie" */}
                  <Route  exact={true} path='/Movie' component={ Movie }/>
                  {/* This is the path to the "SiteFrame" */}
                  <Route path='/MovieSearch' component={ MovieSearch }/>
                  <Route path='/MyProfile' component={ProfilePage}/>
                  <Redirect to="/Login" />
                </Switch>
              </SiteFrame>
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;