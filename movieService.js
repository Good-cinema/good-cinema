const axios = require('axios');

function getMovieDetails(movieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`)
    .then((response) => {
        return response.data
    }, err=>{
        return Promise.reject(err.message);
    })
}

function getMoviesByQuery(query, page) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&include_adult=false`,{
        //
        // DO NOT CHANGE: needs to pass the search query and page number to get actual results for the MovieSearch view
        //
        params: {    
            query: query, 
            page: page 
        } 

    })
    .then((response) => {
        return response.data
    }, err=>{
        return Promise.reject(err.message);
    })
}

function getNewMovies() {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    .then((response) => {
        return response.data
    }, err=>{
        return Promise.reject(err.message);
    })
}

function getUpcomingMovies() {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    .then((response) => {
        return response.data
    }, err=>{
        return Promise.reject(err.message);
    })
}

module.exports = {
    getMovieDetails: getMovieDetails,
    getMoviesByQuery: getMoviesByQuery,
    getNewMovies: getNewMovies,
    getUpcomingMovies: getUpcomingMovies
}