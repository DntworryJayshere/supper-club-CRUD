INSERT INTO menu (name, category, short_description, description) VALUES ('Jay"s" favorites', 'American', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum has been the industry"s" standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.');
INSERT INTO menu VALUES ('The Classico', 'Italian', 'It is a long established fact that a reader will be distracted by the readable content of.', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.');
INSERT INTO menu VALUES ('Mia"s" menu', 'Barbeque','There are many variations of passages of Lorem Ipsum available, but the majority have', 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).');

INSERT INTO dish (name, description, prep_time, total_time, servings, yield, menu_fk_id) VALUES ('Steak', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', '15 Mins', '45 Mins', 4, 4, 1);
INSERT INTO dish VALUES ('Meatballs', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', '15 Mins', '1 Hour', 6, 18, 2);
INSERT INTO dish VALUES ('Ribs', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', '35 Mins', '8 Hours', 4, 8, 3);
INSERT INTO dish VALUES ('Bananas Foster', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', '15 Mins', '35 Mins', 6, 4, 1);
INSERT INTO dish VALUES ('Tiramisu', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', 8, 1, 2);
INSERT INTO dish VALUES ('Banana Pudding Pie', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', 8, 1, 3);

INSERT INTO directions (order_number, description, dish_fk_id) VALUES ( 1, 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. ', 1);
INSERT INTO directions VALUES (2, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 1);
INSERT INTO directions VALUES (3, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 1);
INSERT INTO directions VALUES (1, 'There are many variations of passages of but the majority have suffered alteration in some form, by injected humour, or randomised words which', 2);
INSERT INTO directions VALUES (2, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 2);
INSERT INTO directions VALUES (3, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 2);
INSERT INTO directions VALUES (1, 'There are many variations of passages of but the majority have suffered alteration in some form, by injected humour, or randomised words which', 3);
INSERT INTO directions VALUES (2, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 3);
INSERT INTO directions VALUES (3, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 3);
INSERT INTO directions VALUES (1, 'There are many variations of passages of but the majority have suffered alteration in some form, by injected humour, or randomised words which', 4);
INSERT INTO directions VALUES (2, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 4);
INSERT INTO directions VALUES (3, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 4);
INSERT INTO directions VALUES (1, 'There are many variations of passages of but the majority have suffered alteration in some form, by injected humour, or randomised words which', 5);
INSERT INTO directions VALUES (2, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 5);
INSERT INTO directions VALUES (3, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 5);
INSERT INTO directions VALUES (1, 'There are many variations of passages of but the majority have suffered alteration in some form, by injected humour, or randomised words which', 6);
INSERT INTO directions VALUES (2, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 6);
INSERT INTO directions VALUES (3, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 6);


INSERT INTO ingredient (name, description, quantity, measurment_unit, measurment_descriptor, dish_fk_id) VALUES ('Meat', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 4, 'Whole', 'Trimmed', 1);
INSERT INTO ingredient VALUES ('Butter', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 4, 'Tbs', 'Softened', 1);
INSERT INTO ingredient VALUES ('Seasoning', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 2, 'Tbs', 'Packed', 1);
INSERT INTO ingredient VALUES ('Beef', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 4, 'Pounds', 'Ground', 2);
INSERT INTO ingredient VALUES ('Egg', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 3, 'Whole', 'Beaten', 2);
INSERT INTO ingredient VALUES ('Seasoning', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 3, 'Tbs', 'Packed', 2);
INSERT INTO ingredient VALUES ('Ribs', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 4, 'Racks', 'Trimmed', 3);
INSERT INTO ingredient VALUES ('Sauce', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 1, 'Cup', 'N/A', 3);
INSERT INTO ingredient VALUES ('Butter', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 3, 'Tbs', 'Softened', 3);
INSERT INTO ingredient VALUES ('Banana', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 4, 'Whole', 'Peeled', 4);
INSERT INTO ingredient VALUES ('Brown Sugar', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 2, 'Cups', 'Packed', 4);
INSERT INTO ingredient VALUES ('Butter', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 1, 'Cup', 'Softened', 4);
INSERT INTO ingredient VALUES ('Cream', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 1, 'Cup', 'Stirred', 5);
INSERT INTO ingredient VALUES ('Sugar', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 2, 'Cups', 'Packed', 5);
INSERT INTO ingredient VALUES ('Butter', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 1, 'Cup', 'Softened', 5);
INSERT INTO ingredient VALUES ('Banana', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 4, 'Whole', 'Peeled', 6);
INSERT INTO ingredient VALUES ('Cream', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 2, 'Cups', 'Stirred', 6);
INSERT INTO ingredient VALUES ('Butter', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', 1, 'Cup', 'Softened', 6);
