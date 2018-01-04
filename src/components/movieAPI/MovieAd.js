import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './leftAlign.css';
import '../movie/movie.css';

export default class MovieAd extends Component {
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
        const title = this.state.movieAPI.original_title;
        const movieLink = "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dinstant-video&field-keywords=" + title;
        return (
            <div id="imgSize">
                <Link to={movieLink} target="_blank">
                    <img  className="leftAlign" src={ require("../../img/Amazon-Instant-Video-banner.jpg") } 
                    alt="Amazon Banner" />
                </Link>
            </div>
        )
    }
}
    