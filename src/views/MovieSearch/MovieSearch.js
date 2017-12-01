import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './../../components/SearchResults/SearchResults';
import './MovieSearch.css';
import MovieUpcoming from './../../components/movieAPI/MovieUpcoming'

export default class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            total_pages: 1,
            results: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/get-movies-by-query?query=star wars')
            .then(res => {
                this.setState(res.data)
            },
            () => {
                this.setState({ requestFailed: true })
            })
    }

    render() {
        return (
            <div className='flexbox padding-lg'>

                <div className='flexgrow-2 padding-lg search-results'>
                    {
                        this.state.results.map(
                            r => <SearchResults result={r} />
                        )
                    }
                </div>
                <div className='flexgrow-1 padding-lg'>
                    <MovieUpcoming />
                </div>
            </div>
        )
    }
}
