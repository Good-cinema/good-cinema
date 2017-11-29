import React, { Component } from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import "../movie/movie.css";

export default class MovieRating extends Component {
    constructor() {
        super();
        
        this.state = {
            rating: 1
        };
}

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/get-movie-details/${this.props.movieId}`)
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
        const { rating } = this.state;
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.movieAPI) return <p>Loading...</p>
        return (
            <div>
                <span className="avgBlock" style={{ fontSize: 28 }}><StarRatingComponent value={this.state.movieAPI.vote_average/2} starColor={'gray'} editing={false}  /> Avg Rating</span>
                <span className="starBlock" style={{ fontSize: 34}}>
                    <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                        />
                    <button className="reviewButton">Review</button>
                </span>
            </div>
        )
    }



}