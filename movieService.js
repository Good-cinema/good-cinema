const axios = require('axios');

function getMovieDetails() {
    return axios.get('https://api.themoviedb.org/3/movie/18785?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US')
    .then((response) => {
        return response.data
    })
}

function getMoviesByQuery() {
    return axios.get('https://api.themoviedb.org/3/search/movie?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US&query=The%20Hangover&page=1&include_adult=false')
    .then((response) => {
        return response.data
    })
}

function getNewMovies() {
    return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US&page=1')
    .then((response) => {
        return response.data
    })
}

function getUpcomingMovies() {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c1518c5dfeb80ddb9ed594cba690acaf&language=en-US&page=1')
    .then((response) => {
        return response.data
    })
}

module.exports = {
    getMovieDetails: getMovieDetails,
    getMoviesByQuery: getMoviesByQuery,
    getNewMovies: getNewMovies,
    getUpcomingMovies: getUpcomingMovies
}