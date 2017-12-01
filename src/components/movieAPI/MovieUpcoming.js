import React, { Component } from 'react';
import axios from 'axios';

import './moviesidebar.css';

export default class UpcomingMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/get-upcoming-movies',{
            params: { count: this.props.movieCount || 10 }
        })
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
            <div> <img src={'https://image.tmdb.org/t/p/w500' + result.poster_path} alt="images"/> <br/> {result.title} {result.release_date}</div>
         );
        return (
            <div className="UpcomingMovies">
                <div className="body">
                    {/*<span className="spanSideBar">{listItems}</span>*/}
                    {listItems}
                </div>
            </div>
        )
    }



}