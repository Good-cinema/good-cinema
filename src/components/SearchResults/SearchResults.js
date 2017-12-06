import React, { Component } from 'react';
import WatchlistButton from './../watchlistButton/WatchlistButton';
import axios from 'axios';
import './searchResults.css';
import { Link } from 'react-router-dom';


export default class SearchResults extends Component {

    render() {
        return (

            <div className='searchResults flexbox'>

                <Link to={`/Movie/${this.props.result.id}`}> {
                    this.props.result.poster_path ?
                        <img height='100px' src={'https://image.tmdb.org/t/p/w154' + this.props.result.poster_path} alt="images" /> :
                        <div className="search-poster">
                            No Image
                        </div>
                }
                
                </Link>
                <div className='title flex-grow-1'>
                    <Link to={`/Movie/${this.props.result.id}`}>
                        <span className='movielink'>
                            {this.props.result.title}
                        </span>
                    </Link>

                </div>

                <div className='btn'>
                    <WatchlistButton />
                </div>
            </div>

        );
    }
}

