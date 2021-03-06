import React, { Component } from 'react';
import axios from 'axios';

import './moviePoster.css';

export default class MoviePoster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get(`/api/get-movie-details/${this.props.movieId}`)
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
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.movieAPI) return <p>Loading...</p>
        const poster = 'https://image.tmdb.org/t/p/w500' + this.state.movieAPI.poster_path;
        return (
            <div>
                <span><img className="leftAlign" src={poster} style={{height: 500, width: 338}} alt='Poster'/></span>
            </div>
        )
    }



}