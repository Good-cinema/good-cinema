import React, { Component } from 'react';
import axios from 'axios';
import './moviesidebar.css';
import { Link } from 'react-router-dom';


export default class UpcomingMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }
    componentDidMount() {
        axios.get('/api/get-upcoming-movies',{
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

        <li> <Link to={'/Movie/' + result.id}><img src={'https://image.tmdb.org/t/p/w154' + result.poster_path} alt='Poster'/></Link> <br/> <b>{result.title}</b><br/> {result.release_date}</li>
    );
            //<div key={result.id}> <a href={'../Movie/' + result.id}><img src={'https://image.tmdb.org/t/p/w500' + result.poster_path} alt="images"/></a> <br/> {result.title} {result.release_date}</div>//
         //);
        return (
            <div className="spanSideBar">
                <div className="body">
                    {/*<span className="spanSideBar">{listItems}</span>*/}
                    <p>Upcomimg Releases</p>{listItems}
                </div>
            </div>
        )
    }
}