import React, { Component } from 'react';
import './myReview.css';
import StarRatingComponent from 'react-star-rating-component';

export default class MyReview extends Component {
    render() {
        return (
            <div className="flexbox MyReview padding-sm">
                <div className='padding-sm'>
                    <img src={this.props.review.poster_url} alt='Preview' height='100'></img>
                </div>
                <div className='flex-grow-1 flexbox-col padding-sm'>
                    <div className="">
                        <div className="right">
                            <StarRatingComponent name='review-rating' starCount={5} value={this.props.review.stars} />
                        </div>
                        <div className="bold text-lg">{this.props.review.movie_title}</div>
                    </div>
                    <div className=''>
                        {this.props.review.review_text}
                    </div>
                </div>
            </div>
        );
    }
}