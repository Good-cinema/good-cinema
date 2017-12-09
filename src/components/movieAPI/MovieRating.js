import React, { Component } from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import "../movie/movie.css";
import './movierating.css';

export default class MovieRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
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
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.movieAPI) return <p>Loading...</p>
        return (
            <div>
                <span className="avgBlock">
                    <div className="item">
                        <StarRatingComponent 
                            value={this.state.movieAPI.vote_average/2} 
                            starColor={'red'} 
                            editing={false}  
                        />
                        <p>User Rating</p>
                    </div>
                </span>
            </div>
        )
    }



}