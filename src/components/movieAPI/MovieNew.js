import React, { Component } from 'react';
import axios from 'axios';

import './moviesidebar.css';

export default class NewMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/get-new-movies')
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
            <li> <img src={'https://image.tmdb.org/t/p/w500' + result.poster_path} alt='Poster'/> <br/> {result.title} {result.release_date}</li>
         );
        return (
            <div className="body">
                <span className="spanSideBar">{listItems}</span>
            </div>
        )
    }



}







