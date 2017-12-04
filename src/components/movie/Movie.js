import React, { Component } from 'react';
import './movie.css';
import WatchlistButton from '../watchlistButton/WatchlistButton';
import MovieOverview from '../movieAPI/MovieOverview';
import MovieTitle from '../movieAPI/MovieTitle';
import MoviePoster from '../movieAPI/MoviePoster';
import MovieRating from '../movieAPI/MovieRating';
import MovieAd from '../movieAPI/MovieAd';
import MovieNew from '../movieAPI/MovieNew';
import UserMovieRating from '../movieAPI/UserMovieRating';

export default class Movie extends Component {
    
    render() {
        console.log(this.props.match.params)
        return(
            <div className="movieBody equalHMRWrap">
                <span className="box equalHMR"><h1><MovieTitle movieId={this.props.match.params.movieId} /></h1></span>
                <span className="box equalHMR marginBottom">
                    <MoviePoster movieId={this.props.match.params.movieId} />
                </span>
                <span className="box  equalHMR marginBottom">
                    <WatchlistButton />
                </span>
                <span className="box equalHMR marginLeft marginTop">
                    <MovieRating movieId={this.props.match.params.movieId} />
                </span>
                <span className="box equalHMR overview marginLeft negativeMarginTop negMarginBottom">
                    <MovieOverview movieId={this.props.match.params.movieId} />
                </span>
                <span className="box equalHMR marginLeft marginTop">
                    <UserMovieRating movieId={this.props.match.params.movieId} />
                </span>
                <span className="box equalHMR marginLeft">
                    <MovieAd movieId={this.props.match.params.movieId} />
                </span>
                <span className="box equalHMR marginLeft">
                    <MovieNew />
                </span>
            </div>
        );
    }
}
