INSERT INTO users (user_email, user_firstName, user_lastName, user_phone) VALUES ("jared.m.rodriguez@gmail.com", "jay", "rodriguez", "2678842369");

CREATE TABLE Menues (
    id int NOT NULL AUTO_INCREMENT,
    host_id int NOT NULL,
    menu_dishes int NOT NULL,                            ////
    PRIMARY KEY (id)
);

CREATE TABLE Dishes (
    id int NOT NULL AUTO_INCREMENT,
    dish_name varchar(255) NOT NULL,
    dish_desc varchar(255) NOT NULL,
    dish_rating INTEGER(5),                                /// 
    dish_ingredients varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Ingredients (
    id int NOT NULL AUTO_INCREMENT,
    ingredient_name varchar(255) NOT NULL,
    ingredient_desc varchar(255) NOT NULL,
    PRIMARY KEY (id)
);