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
    const dbInstance = req.app.get('db');
    dbInstance.createReview(req.body)
    .then(review => {
        res.send(review);
    })
}

function changeReview(req, res) {
    const dbInstance = req.app.get('db');
    dbInstance.changeReview(req.body)
    .then(review => {
        res.send(review);
    })
}

function getReviewsByMovie(req, res) {
    const dbInstance = req.app.get('db');
    dbInstance.getReviewsByMovie(req.body)
    .then(review => {
        res.send(review);
    })
}

function getReviewsByUser(req, res) {
    const dbInstance = req.app.get('db');
    dbInstance.getReviewsByUser(req.body)
    .then(review => {
        res.send(review);
    })
}

function deleteReview(req, res) {
    const dbInstance = req.app.get('db');
    dbInstance.deleteReview(req.body)
    .then(() => {
        res.send();
    })
}

function addToWatchlist(req, res) {
    const dbInstance = req.app.get('db');
    const { user_id, movie_id } = req.body
    dbInstance.addToWatchlist(user_id, movie_id)
    .then(()=> {
        res.send()
    })
}

function getWatchlist(req, res) {
    const dbInstance = req.app.get('db');
    dbInstance.getWatchlist(req.params.userId)
    .then(watchlist =>{
        const promises = watchlist.map(item => {
           return movieService.getMovieDetails(item.movie_id)
        }) 

        Promise.all(promises)
            .then(response => {
                res.status(200).send(response);
            })
    })
    .catch(err => {
        console.log(err)
    })
  }

function removeFromWatchlist(req, res) {
    const dbInstance = req.app.get('db');
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
    getReviewsByMovie: getReviewsByMovie,
    getReviewsByUser: getReviewsByUser,
    deleteReview: deleteReview,
    addToWatchlist: addToWatchlist,
    getWatchlist: getWatchlist,
    removeFromWatchlist: removeFromWatchlist,
}