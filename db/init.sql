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
     movie_title VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
     id SERIAL PRIMARY KEY NOT NULL, 
     user_id INTEGER REFERENCES users(id) NOT NULL,
     watchlist_id INTEGER REFERENCES watchlist(id) NOT NULL,
     user_review VARCHAR(255) NOT NULL
);

INSERT INTO users (email, first_name, last_name, password) VALUES
('stewart.saundra@gmail.com', 'saundra', 'stewart', 'hello');