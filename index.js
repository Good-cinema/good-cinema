const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');


const app = express();
app.use( bodyParser.json() );

app.use( cors() );
massive( process.env.CONNECTION_STRING )
    .then(dbInstance => {
        app.set('db', dbInstance)
        return dbInstance.init();   
    })
    .then(response => {
        console.log('database initialized')
    })
    .catch(error => {
        console.error(error)
    });

app.get('/api/get-movie-details/:movieId', controller.getMovieDetails);
app.get('/api/get-movies-by-query', controller.getMoviesByQuery);
app.get('/api/get-new-movies', controller.getNewMovies);
app.get('/api/get-upcoming-movies', controller.getUpcomingMovies);
app.get('/api/users/:userId', controller.getUser);
app.post('/api/users', controller.createUser);
<<<<<<< HEAD
app.post('/api/reviews', controller.createReview);
app.put('/api/reviews', controller.changeReview);
app.get('/api/reviews/:movieId', controller.getReviewsByMovie);
app.get('/api/reviews/:userId', controller.getReviewsByUser);
app.delete('/api/reviews', controller.deleteReview);
app.post('/api/watchlist', controller.addToWatchlist);
app.get('/api/watchlist/:userId', controller.getWatchlist);
app.delete('/api/watchlist', controller.removeFromWatchlist);
=======
app.post('/api/login', controller.checkUser);
>>>>>>> master

const port = process.env.PORT || 8080;
app.listen( port, function() {console.log(`Server listening on port ${this.address().port}.`); } );