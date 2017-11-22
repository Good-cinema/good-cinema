const movieService = require('./movieService');

function getMovieDetails(req, res, next) {
    movieService.getMovieDetails()
    .then(data => {
        res.send(data)
    })
}

function getMoviesByQuery(req, res, next) {
    movieService.getMoviesByQuery()
    .then(data => {
        res.send(data)
    })
}

function getNewMovies(req, res, next) {
    movieService.getNewMovies()
    .then(data => {
        res.send(data)
    })
}

function getUpcomingMovies(req, res, next) {
    movieService.getUpcomingMovies()
    .then(data => {
        res.send(data)
    })
}

module.exports = {
    getMovieDetails: getMovieDetails,
    getMoviesByQuery: getMoviesByQuery,
    getNewMovies: getNewMovies,
    getUpcomingMovies: getUpcomingMovies
}