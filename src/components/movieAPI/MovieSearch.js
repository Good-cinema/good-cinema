import React, { Component } from 'react';

export default class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US&query=The%20Hangover&page=1&include_adult=false')
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
            <li>Title: {result.title} Avg: {result.vote_average} Popularity: {result.popularity}</li>
         );
        return (
            <div>
                <span>{listItems}</span>
            </div>
        )
    }



}