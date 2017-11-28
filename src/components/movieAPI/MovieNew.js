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
            <li> <a href="../SiteFrame/SiteFrame"><img src={'https://image.tmdb.org/t/p/w500' + result.poster_path} alt='Poster'/></a> <br/> <b>{result.title}</b> {result.release_date}</li>
         );
        return (
            <div className="body">
<<<<<<< HEAD
                <span className="newSideBar">{listItems}</span>
=======
                <span className="spanSideBar"><p>New Releases</p>{listItems}</span>
>>>>>>> 50631023026edec25ecd1e2038cbcdbb8993fbf9
            </div>
        )
    }



}







