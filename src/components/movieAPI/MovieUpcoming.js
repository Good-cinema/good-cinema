import React, { Component } from 'react';

import './moviesidebar.css';

export default class UpcomingMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US&page=1')
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
        var results = this.state.movieAPI.results;
        var listItems = results.map((result) =>
            <li> <img src={'https://image.tmdb.org/t/p/w500' + result.poster_path} alt="images"/> <br/> {result.title} {result.release_date}</li>
         );
        return (
            <div className="body">
                <span className="spanSideBar">{listItems}</span>
            </div>
        )
    }



}