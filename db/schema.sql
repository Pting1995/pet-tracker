### Schema

CREATE DATABASE food_db;
USE food_db;

CREATE TABLE foods
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
