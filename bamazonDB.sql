-- Drop bamazon database if it curently exists

DROP DATABASE IF EXISTS bamazonDB;

-- create "bamazonDB"
CREATE DATABASE bamazonDB;

-- USE code
USE bamazonDB;

-- create table called products with columns for item_id, product_name, department_name, price, stock_quantity
CREATE TABLE products (
item_id INTEGER (11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (50),
department_name VARCHAR (50),
price DECIMAL (10, 2),
stock_quantity INTEGER (500),
PRIMARY KEY (item_id)
);


-- INSERT INTO columns mock data

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("remote control car", "toys", 27.99, 5  )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("glue", "office`    ", 4.99, 19 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("socks", "apparel", 7, 22 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("teething mit", "baby", 4, 61 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("aromatherapy diffuser", "home", 18.79, 25 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flip flops", "apparel", 11, 40 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog bowl", "pets", 8.50, 12 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("diapers", "baby", 16.49, 20 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("scissors", "office", 6.25, 2 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toaster oven", "appliances", $49, 8 )

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("headphones", "electronics", 199.99, 10 )



