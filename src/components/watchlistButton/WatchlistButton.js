import React, { Component } from 'react';
import './watchlistButton.css';
import '../movieAPI/leftAlign.css';
import axios from 'axios';

export default class WatchlistButton extends Component {
    
    addMovie(event){
        event.preventDefault()
        console.log(this.props);
        const body = {
            user_id: this.props.userId,
            movie_id: this.props.movieId
        }
    

    axios.post('http://localhost:8080/api/watchlist', body)
    .then( (watchlistItem)=>{
        console.log(watchlistItem);
    })

    }

    render() {
        return(
            <button className="button leftAlign" onClick={this.addMovie.bind(this)}>Add To Watchlist</button>
        );
    }
}