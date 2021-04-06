CREATE DATABASE IF NOT EXISTS supper_club_db;
USE supper_club_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS dish;
DROP TABLE IF EXISTS ingredient;
DROP TABLE IF EXISTS directions;

-- Create the menu table
CREATE TABLE menu (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
    short_description varchar(40) NOT NULL,
    description varchar(255) NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (dish_id) REFERENCES dishes(id)
);

-- Create the dish table
CREATE TABLE dish (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    prep_time varchar(255) NOT NULL,
    total_time varchar(255) NOT NULL,
    servings int NOT NULL,
    yield int NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (dish_id) REFERENCES dishes(id)
);

-- Create the ingredient table
CREATE TABLE ingredient (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    quantity int NOT NULL,
    measurment_unit varchar(255) NOT NULL,
    measurment_descriptor varchar(255),
    PRIMARY KEY (id)
    FOREIGN KEY (dish_id) REFERENCES dishes(id)
);
-- Create the directions table
CREATE TABLE directions (
    id int NOT NULL AUTO_INCREMENT,
    step_1 varchar(255) NOT NULL,
    step_2 varchar(255) NOT NULL,
    step_3 varchar(255),
    step_4 varchar(255),
    step_5 varchar(255),
    step_6 varchar(255),
    step_7 varchar(255),
    step_8 varchar(255),
    step_9 varchar(255),
    step_10 varchar(255),
    PRIMARY KEY (id)
    FOREIGN KEY (dish_id) REFERENCES dishes(id)
);

