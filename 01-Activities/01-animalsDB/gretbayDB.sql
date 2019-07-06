DROP DATABASE IF EXISTS greatbay_DB;

CREATE DATABASE greatbay_DB;

USE greatbay_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NULL,
  category VARCHAR(45) NULL,
  initialBid INTEGER(11) NULL,
  highestBid INTEGER(11) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item, category, initialBid)
VALUES ("iPhone", "Phone", 100);

INSERT INTO products (item, category, initialBid)
VALUES ("Galaxy S9+", "Phone", 150);

INSERT INTO products (item, category, initialBid)
VALUES ("Converse All Stars", "Shoes", 50);

INSERT INTO products (item, category, initialBid)
VALUES ("MacBook", "Computer", 500);