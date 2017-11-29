import React, { Component } from 'react';
import './movie.css';
import WatchlistButton from '../watchlistButton/WatchlistButton';
import MovieOverview from '../movieAPI/MovieOverview';
import MovieTitle from '../movieAPI/MovieTitle';
import MoviePoster from '../movieAPI/MoviePoster';
import MovieRating from '../movieAPI/MovieRating';

export default class Movie extends Component {
    
    render() {
        return(
            <div className="movieBody equalHMRWrap">
                <span className="box equalHMR"><h1><MovieTitle /></h1></span>
                <span className="box equalHMR marginBottom">
                    <MoviePoster />
                    {/* <img src={ require("../../img/ramboposter.jpg") } 
                    alt="Rambo Poster" 
                    style={{width: 338, height: 500}}/> */}
                </span>
                <span className="box  equalHMR marginBottom">
                    <WatchlistButton />
                </span>
                <span className="box equalHMR marginLeft marginTop">
                    <MovieRating />
                </span>
                <span className="box equalHMR overview marginLeft negativeMarginTop negMarginBottom">
                    <MovieOverview />
                </span>
                <span className="box equalHMR marginLeft">
                    {/* <a href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dinstant-video&field-keywords=the+hangover" target="_blank">
                        <img src={ require("../../img/Amazon-Instant-Video-banner.jpg") } 
                        alt="Amazon Banner" 
                        style={{width: 330, height: 125}} />
                    </a> */}
                </span>
            </div>
        );
    }
}
