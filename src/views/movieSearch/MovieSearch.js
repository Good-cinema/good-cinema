import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './../../components/searchResults/SearchResults';
import './movieSearch.css';
import MovieUpcoming from './../../components/movieAPI/MovieUpcoming'
import queryString from 'query-string';
import { Link } from 'react-router-dom';

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
        var query = queryString.parse(this.props.location.search);
        this.setState({ query: query.query });
        this.loadResults(query);
        this.props.history.listen( location =>  {
            //
            // reloads the search results when the path changes
            //
            var query = queryString.parse(location.search);
            this.loadResults(query);
        });
    }
    loadResults({page, query}) {
        axios.get('http://localhost:8080/api/get-movies-by-query',{
            params:{ query: query, page: page || 1 }
        })
        .then(res => {
            this.setState(res.data)
            this.refs.results.scrollTop = 0;
        },
        () => {
            this.setState({ requestFailed: true })
        })
    }

    render() {
        return (
            <div className='flexbox padding-lg'>
                <div className='flex-grow-2 padding-lg'>
                    <div ref='results' className="search-results">
                    {
                        this.state.results.length == 0 ?
                            "No Results" :
                            this.state.results.map(
                                r => <SearchResults key={r.id} result={r} />
                            )
                    }
                    </div>
                    <div>
                    {
                        this.state.page > 1 ?
                            <Link to={`/MovieSearch?query=${this.state.query}&page=${this.state.page-1}`}>
                            &lt;&lt; Previous Page
                            </Link> :
                            null
                    }
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {
                        this.state.total_pages > this.state.page ?
                            <Link to={`/MovieSearch?query=${this.state.query}&page=${this.state.page+1}`}>
                            Next Page &gt;&gt;
                            </Link> :
                            null
                    }
                    </div>
                </div>
                <div className='flex-grow-1 padding-lg movie-search-side-bar'>
                    <MovieUpcoming />
                </div>
            </div>
        )
    }
}
