import React, { Component } from 'react';
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
        fetch('https://api.themoviedb.org/3/movie/18785?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US')
        .then(response => {
            if (!response.ok) {
                throw Error("Network request failed")
              }
            return response;
        })
        .then(data => data.json())
        .then(data => {    
            this.setState({
                movieAPI: data
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
                <span className="avgBlock" style={{ fontSize: 22 }}>Average Rating {this.state.movieAPI.vote_average/2} Stars</span>
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