import React, { Component } from 'react';

export default class MoviePoster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/18785?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US')
        .then(response => {
            if (!response.ok) {
                throw Error("Network request failed")
              }
            return response;
        })
        .then(data => data.json())
        .then(data => {    
            this.setState({
                movieAPI: data
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
        var poster = 'https://image.tmdb.org/t/p/w500' + this.state.movieAPI.poster_path;
        return (
            <div>
                <span><img src={poster} style={{height: 500, width: 338}} alt='Poster'/></span>
            </div>
        )
    }



}