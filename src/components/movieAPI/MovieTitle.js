import React, { Component } from 'react';
import axios from 'axios';

export default class MovieTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/get-movie-details')
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
                <span>{this.state.movieAPI.original_title}</span>
            </div>
        )
    }



}