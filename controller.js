const movieService = require('./movieService');

function getMovieDetails(req, res, next) {
    console.log(req.params.movieId);
    movieService.getMovieDetails(req.params.movieId)
    .then(data => {
        res.send(data)
    }, err=>{
        res.status(400).send(err);
    })
}

function getMoviesByQuery(req, res, next) {
    movieService.getMoviesByQuery(req.query.query, req.query.page || 1)
    .then(data => {
        res.send(data)
    }, err=>{
        res.status(400).send(err);
    })
}

function getNewMovies(req, res, next) {
    movieService.getNewMovies()
    .then(data => {
        res.send(data);
    }, err=>{
        res.status(400).send(err);
    })
}

function getUpcomingMovies(req, res, next) {
    movieService.getUpcomingMovies()
    .then(data => {
        res.send(data)
    }, err=>{
        res.status(400).send(err);
    })
}

function getUser(req, res, next) {
    const dbInstance = req.app.get('db')
    dbInstance.users.findOne({id: req.params.userId})
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

function getUserByEmail(req, res, next) {
    const dbInstance = req.app.get('db');
    dbInstance.getUserByEmail(req.query.email)
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

function createUser(req, res, next) {
    const dbInstance = req.app.get('db');
    dbInstance.createUser(req.body.email, req.body.first_name, req.body.password)
    .then( () =>{
        return dbInstance.getUsers(req.body.email);
    })
    .then(user => { 
        res.send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

function createReview(req, res) {
    const dbInstance = req.app.post('db');
    dbInstance.createReview(req.body)
    .then(review => {
        res.send(review);
    })
}

function changeReview(req, res) {
    const dbInstance = req.app.put('db');
    dbInstance.changeReview(req.body)
    .then(review => {
        res.send(review);
    })
}

function getReviews(req, res) {
    const dbInstance = req.app.get('db');
    dbInstance.getReviewsByUser(req.body)
    .then(review => {
        res.send(review);
    })
}

function deleteReview(req, res) {
    const dbInstance = req.app.delete('db');
    dbInstance.deleteReview(req.body)
    .then(() => {
        res.send();
    })
}

function addToWatchlist(req, res) {
    const dbInstance = req.app.post('db');
    dbInstance.addToWatchlist(req.body)
    .then(()=> {
        res.send()
    })
}

function getWatchlist(req, res) {
    const dbInstance = req.app.get('db');
    dbInstance.getWatchlist(req.params.userId)
    .then(watchlist =>{
        res.send(watchlist)
    })
  }

function removeFromWatchlist(req, res) {
    const dbInstance = req.app.delete('db');
    dbInstance.removeFromWatchlist(req.body)
    .then(()=> {
        res.send()
    })
}

module.exports = {
    getMovieDetails: getMovieDetails,
    getMoviesByQuery: getMoviesByQuery,
    getNewMovies: getNewMovies,
    getUpcomingMovies: getUpcomingMovies,
    getUser: getUser,
    getUserByEmail: getUserByEmail,
    createUser: createUser,
    createReview: createReview,
    changeReview: changeReview,
    getReviews: getReviews,
    deleteReview: deleteReview,
    addToWatchlist: addToWatchlist,
    getWatchlist: getWatchlist,
    removeFromWatchlist: removeFromWatchlist,
}