DROP TABLE IF EXISTS reviews, watchlist, users;

CREATE TABLE users (
     id SERIAL PRIMARY KEY NOT NULL,
     email VARCHAR(255) NOT NULL,
     first_name VARCHAR(255) NOT NULL,
     last_name VARCHAR(255) NULL,
     password VARCHAR(255) NOT NULL	
);

CREATE TABLE watchlist (
     id SERIAL PRIMARY KEY NOT NULL,
     user_id INTEGER REFERENCES users(id) NOT NULL,
     movie_id VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
     id SERIAL PRIMARY KEY NOT NULL, 
     user_id INTEGER REFERENCES users(id) NOT NULL,
     movie_id VARCHAR(255) NOT NULL,
     user_review VARCHAR(255) NOT NULL
);

INSERT INTO users (email, first_name, last_name, password) VALUES
('stewart.saundra@gmail.com', 'saundra', 'stewart', 'hello'),
('paola@gmail.com', 'paola', 'anderson', '1234');

INSERT INTO watchlist (user_id, movie_id) VALUES
(1, '200'), 
(1, '101');

INSERT INTO reviews (user_id, movie_id, user_review) VALUES
(1, '200', 'This was so cool!'),
(1, '101', 'Not my favorite.');
