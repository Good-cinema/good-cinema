import React, { Component } from 'react';
import axios from 'axios';

export default class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/get-movies-by-query')
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