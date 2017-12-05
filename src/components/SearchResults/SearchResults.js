import React, { Component } from 'react';
import WatchlistButton from './../watchlistButton/WatchlistButton';
import axios from 'axios';
import './searchResults.css';

export default class SearchResults extends Component {

    render() {
        return (
           
            <div className='searchResults flexbox'>
                {
                    this.props.result.poster_path ?
                        <img height='100px' src={'https://image.tmdb.org/t/p/w154' + this.props.result.poster_path} alt="images" /> :
                        <div className="search-poster">
                            No Image
                        </div>
                }
                <div className='title flex-grow-1'>
                    {this.props.result.title}
                </div>

                <div className='btn'>
                    <WatchlistButton />
                </div>
            </div>
           
        );
    }
}

