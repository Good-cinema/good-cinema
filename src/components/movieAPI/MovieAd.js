import React, { Component } from 'react';
import axios from 'axios';

import '../movie/movie.css';

export default class MovieAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

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
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.movieAPI) return <p>Loading...</p>
        const title = this.state.movieAPI.original_title;
        const movieLink = "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dinstant-video&field-keywords=" + title;
        return (
            <div id="imgSize" className="body">
                <a href={movieLink} target="_blank">
                    <img src={ require("../../img/Amazon-Instant-Video-banner.jpg") } 
                    alt="Amazon Banner" />
                </a>
            </div>
        )
    }
}
    