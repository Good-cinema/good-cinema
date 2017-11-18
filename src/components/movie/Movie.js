import React, { Component } from 'react';

import StarRatingComponent from 'react-star-rating-component';
import WatchlistButton from '../watchlistButton/WatchlistButton';
import MovieAPI from '../movieAPI/MovieAPI';

import './movie.css';

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
                <span className="box equalHMR"><h1>Rambo: First Blood</h1></span>
                <span className="box equalHMR marginTop">
                    <img src={ require("../../img/ramboposter.jpg") } 
                    alt="Rambo Poster" 
                    style={{width: 338, height: 500}}/>
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
                <span className="box equalHMR marginTop">
                    <MovieAPI />
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, elit vitae lobortis fermentum, velit mauris facilisis velit, in scelerisque tellus quam at purus. Phasellus sollicitudin placerat ex, non iaculis orci hendrerit eu. Praesent nec velit eros. Donec ut lorem tellus. Donec venenatis lectus in mauris lobortis sagittis vel nec orci. Aenean ut leo sed lacus egestas scelerisque. In suscipit blandit turpis, eget molestie arcu tincidunt et. Aenean sit amet velit in sem ultrices elementum. Nullam dui felis, porttitor ultricies purus non, facilisis pretium lectus.</p>

                    <p>Pellentesque eu odio blandit, semper lorem quis, sagittis lectus. Aliquam ut turpis eu urna lobortis hendrerit quis sed ante. Curabitur quis semper neque, sed elementum orci. Suspendisse sagittis accumsan accumsan. Praesent orci enim, scelerisque at mi non, volutpat malesuada nunc. Sed imperdiet ac diam in vehicula. Aliquam rutrum, tortor a varius scelerisque, dolor mauris convallis ligula, sed pulvinar dolor ipsum id urna..</p> */}
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
