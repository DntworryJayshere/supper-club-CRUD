DROP DATABASE IF EXISTS supperClubDev;
CREATE DATABASE supperClubDev;

USE supperClubDev;

-- CREATE TABLE users (
--     id int NOT NULL AUTO_INCREMENT,
--     user_email varchar(255) NOT NULL, 
--     user_firstName varchar(255) NOT NULL,
--     user_lastName varchar(255) NOT NULL,
--     phone varchar(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

CREATE TABLE menues (
    id int NOT NULL AUTO_INCREMENT,
    host_id int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE dishes (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    desc varchar(255) NOT NULL,
    rating INTEGER(5),  
    menu_id                             
    ingredient_id varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ingredients (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    desc varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

DROP DATABASE IF EXISTS supperClubTest;
CREATE DATABASE supperClubTest;

