import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './../../components/searchResults/SearchResults';
import './movieSearch.css';

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
            <div className='MovieSearch'>
                {
                    this.state.results.map(
                        r => <SearchResults result={r}/>
                    )
                }
            </div>
        )
    }
}
