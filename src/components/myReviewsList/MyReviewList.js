import React, { Component } from 'react';
import './myReviewList.css';
import MyReview from '../myReview/MyReview';

export default class MyReviewList extends Component {
    constructor(){
        super();
        this.state={
            reviews: [
                {
                    movie_title: "Jumanji",
                    poster_url: require('./../../img/jumanjiposter.jpg'),
                    profile_url: require('./../../img/user-gray.svg'),
                    review_text: 'Everyone should watch this movie',
                    stars: 3
                },
                {
                    movie_title: "Jumanji",
                    poster_url: require('./../../img/jumanjiposter.jpg'),
                    profile_url: require('./../../img/user-gray.svg'),
                    review_text: 'Everyone should watch this movie',
                    stars: 3
                },
                {
                    movie_title: "This is a really really really long title that is supposed to wrap around when it hits the stars",
                    poster_url: require('./../../img/jumanjiposter.jpg'),
                    profile_url: require('./../../img/user-gray.svg'),
                    review_text: 'Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. Everyone should watch this movie. ',
                    stars: 3
                }
            ],
        }
    }
    render(){
        return (
            <div>
               {
                   this.state.reviews.map( review => (
                       <MyReview review={review}/>
                   ) )
               }
            </div>
        );
    }
}