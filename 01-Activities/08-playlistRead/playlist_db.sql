DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_bd;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45),
  artist VARCHAR(45),
  genre VARCHAR(25),
  PRIMARY KEY (id)
);

INSERT INTO  songs (title, artist, genre)
VALUES ("Sucker", "Jonas Brothers", "Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("MMMbop", "Hanson", "Heavy Metal");

INSERT INTO songs (title, artist, genre)
VALUES ("I Get Knocked Down", "Chumbawumba", "Pop");