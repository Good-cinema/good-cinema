import React, { Component } from 'react';
import './App.css';
import SiteFrame from './Components/SiteFrame/SiteFrame';

class App extends Component {
  render() {
    return (
      <div>
        <SiteFrame>
          <p> router goes here</p>
        </SiteFrame>
      </div>
    );
  }
}

export default App;
