import React, { Component } from 'react';
import WatchlistButton from './../watchlistButton/WatchlistButton';
import './SearchResults.css';

export default class SearchResults extends Component {
    render() {
        return (
            <div className='SearchResults flexbox'>
                <img height='100px' src={'https://image.tmdb.org/t/p/w500' + this.props.result.poster_path} alt="images" />
                <div className='title flex-grow-1'>
                    {this.props.result.title}
                </div>
                
                <div className='btn'>
                    <WatchlistButton/>
                </div>
            </div>
        );
    }
}

