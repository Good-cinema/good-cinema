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
                <span className="avgBlock" style={{ fontSize: 24 }}>
                    <StarRatingComponent 
                        value={this.state.movieAPI.vote_average/2} 
                        starColor={'red'} 
                        editing={false}  
                    />
                    <p style={{ fontSize: 18, margin: 0 }}>User Rating</p>
                </span>
            </div>
        )
    }



}