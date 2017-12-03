const axios = require('axios');

function getMovieDetails(movieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`)
    .then((response) => {
        return response.data
    })
}

function getMoviesByQuery() {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=The%20Hangover&page=1&include_adult=false`)
    .then((response) => {
        return response.data
    })
}

function getNewMovies() {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    .then((response) => {
        return response.data
    })
}

function getUpcomingMovies() {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
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