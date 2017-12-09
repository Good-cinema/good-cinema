const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');
const Database = require('./database');

const app = express();
app.use( bodyParser.json() );

app.use( cors() );
massive( process.env.CONNECTION_STRING )
    .then(dbInstance => {
        app.set('db', dbInstance )
        
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
app.post('/api/login', controller.checkUser);

const port = process.env.PORT || 8080;
app.listen( port, function() {console.log(`Server listening on port ${this.address().port}.`); } );