const movieService = require('./movieService');

function getMovieDetails(req, res, next) {
    movieService.getMovieDetails()
    .then(data => {
        res.send(data)
    })
}

function getMoviesByQuery(req, res, next) {
    movieService.getMoviesByQuery(req.query.query, req.query.page || 1)
    .then(data => {
        res.send(data)
    }, err=>{
        res.send(err.data);
    })
}

function getNewMovies(req, res, next) {
    movieService.getNewMovies()
    .then(data => {
        res.send(data);
    }, err=>{
        res.send(err);
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