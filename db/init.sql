DROP TABLE IF EXISTS reviews, watchlist, users;

CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     email VARCHAR(255),
     first_name VARCHAR(255),
     last_name VARCHAR(255),
     password VARCHAR(255)	
);

CREATE TABLE watchlist (
     id SERIAL PRIMARY KEY,
     user_id INTEGER REFERENCES users(id),
     movie_title VARCHAR(255)
);

CREATE TABLE reviews (
     id SERIAL PRIMARY KEY, 
     user_id INTEGER REFERENCES users(id),
     watchlist_id INTEGER REFERENCES watchlist(id),
     user_review VARCHAR(255)
);

INSERT INTO users (email, first_name, last_name, password) VALUES
('stewart.saundra@gmail.com', 'saundra', 'stewart', 'hello');