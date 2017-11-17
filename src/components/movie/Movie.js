import React, { Component } from 'react';
import './movie.css';
import StarRatingComponent from 'react-star-rating-component';
import WatchlistButton from '../watchlistButton/WatchlistButton';
import MovieOverview from '../movieAPI/MovieOverview';
import MovieTitle from '../movieAPI/MovieTitle';
import MoviePoster from '../movieAPI/MoviePoster';

export default class Movie extends Component {
    constructor() {
        super();
 
        this.state = {
            rating: 1
        };
    }
 
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    render() {
        const { rating } = this.state;
        return(
            <div className="movieBody equalHMRWrap">
                <span className="box equalHMR"><h1><MovieTitle /></h1></span>
                <span className="box equalHMR marginTop">
                    <MoviePoster />
                    {/* <img src={ require("../../img/ramboposter.jpg") } 
                    alt="Rambo Poster" 
                    style={{width: 338, height: 500}}/> */}
                </span>
                <span className="box  equalHMR marginBottom">
                    <WatchlistButton />
                </span>
                <span style={{ fontSize: 34 }} className="box equalHMR">
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                    <button className="reviewButton">Review</button>
                </span>
                <span className="box equalHMR marginTop overview">
                    <MovieOverview />
                </span>
                <span className="box equalHMR">
                    <img src={ require("../../img/Amazon-Instant-Video-banner.jpg") } 
                    alt="Amazon Banner" 
                    style={{width: 330, height: 125}} />
                </span>
            </div>
        );
    }
}
