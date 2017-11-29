import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/homePage/HomePage';
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
               
                  <Route path='/Landing' component={ LandingPage }/>
                  <Route path='/MovieSearch' component={ MovieSearch }/>
                  <Route path='/MyProfile' component={ProfilePage}/>
                  
                
              </SiteFrame>
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;