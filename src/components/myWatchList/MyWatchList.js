import React, { Component } from 'react';
import "./myWatchList.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MyWatchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() { 
        console.log(this.props)
        axios.get(`/api/watchlist/${this.props.userId}`)
            .then(res => {   
                this.setState({
                    movieAPI: res.data
                })
            }, () => {
                this.setState({
                    requestFailed: true
                });
            });
    };

    getMovieDetails(movieId) {
        return axios.get(`/api/get-movie-details/${movieId}`)
            .then(res => {
                this.setState({
                    details: res.data
                });
            })
    };

    


    render() {
        console.log(this.props.userId)
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.movieAPI) return <p>Loading...</p>
       
        var listItems = this.state.movieAPI.map((result, i) => {
           return <li key={i}>
                <Link to={'/Movie/' + result.id}>
                    <img src={'https://image.tmdb.org/t/p/w500' + result.poster_path} alt='Poster'/>
                </Link>
                <br/>
                <b>{result.title}</b>
                <br/>
                {result.release_date}
            </li>
        });
        return (
            <div className="body">
                <span className="watch-list-item">{listItems}</span>
            </div>
        )    
    }    
    // constructor(){
    //     super();
    //     this.state={
    //         watchlist: [
    //             { 
    //                 movie_title: "How to watch a movie in 10 days",
    //                 poster_url: require('./../../img/avengersposter.jpg')
    //             },
    //             { 
    //                 movie_title: "How to watch a movie in 10 days",
    //                 poster_url: require('./../../img/avengersposter.jpg')
    //             },
    //             { 
    //                 movie_title: "How to watch a movie in 10 days",
    //                 poster_url: require('./../../img/avengersposter.jpg')
    //             }
    //         ]
    //     };
    // }
    // render(){
    //     return (
    //         <div className="">
    //             { 
    //                 this.state.watchlist.map(watch=>(
    //                     <div className="watch-list-item flexbox align-items-middle">
    //                         <div className="padding-md">
    //                             <img height="75" alt={watch.movie_title} src={watch.poster_url}/>
    //                         </div>
    //                         <div className="flex-grow-1 bold padding-md">
    //                             {watch.movie_title}
    //                         </div>
    //                         <div className="padding-md">
    //                             <button className="btn btn-default">Remove</button>
    //                         </div>
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     );
    // }
}