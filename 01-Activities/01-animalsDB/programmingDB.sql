CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
language VARCHAR(20),
rating INTEGER(11),
mastered BOOLEAN DEFAULT true,
PRIMARY KEY (id)
);

INSERT INTO programming_languages(language, rating)
VALUES("HTML",95);

INSERT INTO programming_languages(language, rating)
VALUES("JS",99);

INSERT INTO programming_languages(language, rating)
VALUES("JQuery",93);

INSERT INTO programming_languages(language, rating)
VALUES("MySQL",77);

SELECT*FROM programming_languages;
