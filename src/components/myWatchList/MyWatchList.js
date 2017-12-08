import React, { Component } from 'react';
import "./myWatchList.css";

export default class MyWatchList extends Component {
    constructor(){
        super();
        this.state={
            watchlist: [
                { 
                    movie_title: "How to watch a movie in 10 days",
                    poster_url: require('./../../img/avengersposter.jpg')
                },
                { 
                    movie_title: "How to watch a movie in 10 days",
                    poster_url: require('./../../img/avengersposter.jpg')
                },
                { 
                    movie_title: "How to watch a movie in 10 days",
                    poster_url: require('./../../img/avengersposter.jpg')
                }
            ]
        };
    }
    render(){
        return (
            <div className="">
                { 
                    this.state.watchlist.map(watch=>(
                        <div className="watch-list-item flexbox align-items-middle">
                            <div className="padding-md">
                                <img height="75" alt={watch.movie_title} src={watch.poster_url}/>
                            </div>
                            <div className="flex-grow-1 bold padding-md">
                                {watch.movie_title}
                            </div>
                            <div className="padding-md">
                                <button className="btn btn-default">Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}