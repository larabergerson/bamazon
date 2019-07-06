DROP DATABASE IF EXISTS greatbay_DB;

CREATE DATABASE greatbay_DB;

USE greatbay_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(45) NULL,
  category VARCHAR(45) NULL,
  starting_bid INTEGER(11) NULL default 0,
  highest_bid INTEGER(11) NULL default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_name, category, starting_bid)
VALUES ("iPhone", "Phone", 100);

INSERT INTO products (item_name, category, starting_bid)
VALUES ("Galaxy S9+", "Phone", 150);

INSERT INTO products (item_name, category, starting_bid)
VALUES ("Converse All Stars", "Shoes", 50);

INSERT INTO products (item_name, category, starting_bid)
VALUES ("MacBook", "Computer", 500);