-- Drop bamazon database if it curently exists

DROP DATABASE IF EXISTS bamazonDB;

-- create "bamazonDB"
CREATE DATABASE bamazonDB;

-- USE code
USE bamazonDB;

-- create table called products with columns for item_id, product_name, department_name, price, stock_quantity
CREATE TABLE products (
item_id INTEGER (11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (50) NOT NULL,
price DECIMAL (10, 2) NOT NULL,
stock_quantity INTEGER (50) NOT NULL,
PRIMARY KEY (item_id)
);


-- INSERT INTO columns mock data

INSERT INTO products (product_name, department_name, price, stock_quantity) values
("remote control car", "toys", 27.99, 5  ),
("glue", "office", 4.99, 19 ),
("vitamix", "appliances", 399.99, 22 ),
("teething mit", "baby", 5.99, 61 ),
("aromatherapy diffuser", "home", 35.79, 25 ),
("flip flops", "apparel", 11, 40 ),
("dog bowl", "pets", 8.50, 12 ),
("diapers", "baby", 16.49, 20 ),
("scissors", "office", 6.25, 2 ),
("toaster oven", "appliances", 49, 8 ),
("headphones", "electronics", 199.99, 10 )
