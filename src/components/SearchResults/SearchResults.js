import React, { Component } from 'react';
import WatchlistButton from './../watchlistButton/WatchlistButton';
import axios from 'axios';
import './searchResults.css';

export default class SearchResults extends Component {

    componentDidMount() {
        axios.get(`http://localhost:8080/api/get-movie-details/${this.props.movieId}`)
        .then(res => {   
            this.setState({
                movieAPI: res.data
            })
        }, () => {
        this.setState({
          requestFailed: true
        })
      })
    }

    render() {
        return (
            <div className='searchResults flexbox'>
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

