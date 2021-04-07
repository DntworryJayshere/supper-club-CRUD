DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS dish;
DROP TABLE IF EXISTS ingredient;
DROP TABLE IF EXISTS directions;

CREATE TABLE menu (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    category VARCHAR(255) NOT NULL,
    short_description VARCHAR(40) NOT NULL,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE dish (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    description VARCHAR(255) NOT NULL,
    prep_time VARCHAR(20) NOT NULL,
    total_time VARCHAR(20) NOT NULL,
    servings INT NOT NULL,
    yield INT NOT NULL,
    menu_fk_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (menu_fk_id) REFERENCES menu(id) ON DELETE SET NULL
);

CREATE TABLE ingredient (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    description VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    measurment_unit VARCHAR(20) NOT NULL,
    measurment_descriptor VARCHAR(255),
    dish_fk_id INT,
    PRIMARY KEY (ingredient_id, dish_fk_id),
    FOREIGN KEY (dish_fk_id) REFERENCES dish(id) ON DELETE CASCADE
);

CREATE TABLE directions (
    id INT NOT NULL AUTO_INCREMENT,
    order_number INT NOT NULL, 
    description VARCHAR(255) NOT NULL,
    dish_fk_id INT,
    PRIMARY KEY UNIQUE(order_number, dish_fk_id),
    FOREIGN KEY (dish_fk_id) REFERENCES dish(id) ON DELETE CASCADE
);
