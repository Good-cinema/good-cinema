import React, { Component } from 'react';
import './App.css';
import SiteFrame from './Components/SiteFrame/SiteFrame';
import HomePage from './Views/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <SiteFrame>
         
         <HomePage/>
        </SiteFrame>
      </div>
    );
  }
}

export default App;
