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
                    movie_title: "The Holiday",
                    poster_url: require('./../../img/holiday.jpg'),
                    profile_url: require('./../../img/user-gray.svg'),
                    review_text: 'The perfect holiday movie!',
                    stars: 5
                },
                {
                    movie_title: "Rocky",
                    poster_url: require('./../../img/rocky.jpeg'),
                    profile_url: require('./../../img/user-gray.svg'),
                    review_text: 'Sylvester Stallone is really sloughing it off shamelessly in Rocky IV, but its still impossible not to root for old Rocky Balboa to get up off the canvas and whup that bully one more time.',
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