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
    req.app.get('db').getUser(req.params.userId)
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

function getUserByEmail(req, res, next) {
    req.app.get('db').getUserByEmail(req.query.email)
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
        return dbInstance.getUser(req.body.email);
    })
    .then(user => { 
        res.send(user[0]);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

function checkUser(req, res, next) {
    const dbInstance = req.app.get('db');
    dbInstance.checkUser(req.body.email)
    .then( (user) => {
        if(user[0].password === req.body.password) {
            return res.status(200).send(user);
        } else {
            return res.status(400).send('Password Does Not Match');
        }
    })
    .catch( (err) => {
        res.status(500).send(err);
    });
} 
module.exports = {
    getMovieDetails: getMovieDetails,
    getMoviesByQuery: getMoviesByQuery,
    getNewMovies: getNewMovies,
    getUpcomingMovies: getUpcomingMovies,
    getUser: getUser,
    getUserByEmail: getUserByEmail,
    createUser: createUser,
    checkUser: checkUser
}