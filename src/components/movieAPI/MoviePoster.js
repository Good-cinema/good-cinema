import React, { Component } from 'react';

export default class MoviePoster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/1368?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US')
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
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.movieAPI) return <p>Loading...</p>
        return (
            <div>
                <span><img src={this.state.movieAPI.poster_path} /></span>
            </div>
        )
    }



}