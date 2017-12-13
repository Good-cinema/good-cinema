import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './moviesidebar.css';

export default class NewMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get('/api/get-new-movies')
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
            <li> <Link to={'/Movie/' + result.id}>
            <img src={'https://image.tmdb.org/t/p/w500' + result.poster_path} alt='Poster'/></Link>
            <br/> <b>{result.title}</b>
            <br/> {result.release_date}</li>
         );
        return (
            <div className="body">
                <span className="spanSideBar"><p>New Releases</p>{listItems}</span>
            </div>
        )
    }
}







