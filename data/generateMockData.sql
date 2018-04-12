CREATE DATABASE fec;
\connect fec;

CREATE TABLE reviews
(
  id INT UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  user_avatar  TEXT NOT NULL,
  created_at TEXT NOT NULL,
  body TEXT NOT NULL,
  accuracy INT NOT NULL,
  communication INT NOT NULL,
  cleanliness INT NOT NULL,
  location INT NOT NULL,
  checkIn INT NOT NULL,
  value INT NOT NULL
);

COPY reviews(id, first_name, user_avatar, created_at, 
body, accuracy, communication, cleanliness, location, checkIn, value) 
FROM '/Users/Belinda/Hack-Reactor/FEC-reviews/data/mock-data.csv' DELIMITER ',' CSV HEADER;