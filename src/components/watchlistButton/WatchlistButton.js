import React, { Component } from 'react';
import './watchlistButton.css';
import '../movieAPI/leftAlign.css';

export default class WatchlistButton extends Component {
    render() {
        return(
            <button className="button leftAlign">Add To Watchlist</button>
        );
    }
}