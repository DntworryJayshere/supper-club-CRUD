var db = require('./models');

db.sync({ force: true })
	.then(function () {
		db.models.menu
			.create(
				{
					name: "Jay's favorite menu",
					category: 'Dinner',
					desc: 'hand crafted to perfection',
					dishes: [
						{
							name: 'Cacio e Pepe Potato Gnocchi',
							desc:
								"Homemade potato gnocchi is surprisingly easy to make and the dough is a dream to work with. Unlike pasta, there's no resting or labored rolling involved. It's as simple as roasting a few potatoes and mixing everything together.",
							prepTime: '10 mins',
							totalTime: '1 hour 45 mins',
							yield: '6 servings',
							instructions:
								'1) Preheat oven to 400°. Poke potatoes all over with a fork and place directly on oven racks. Bake until easily pierced with a knife, about 1 hour. Let cool slightly. 2) When potatoes are cool enough to handle, cut in half and scoop out insides. Discard skins. Run potatoes through a ricer or mash well with a fork. 3) In a large bowl, combine riced potatoes, flour, eggs, salt, and a little pepper until a dough forms. 4) Turn dough onto a lightly floured surface and knead until smooth, about 3 minutes. 5) Divide dough into 4 pieces. Using your hands, roll each piece into a long rope, about ¾” in diameter. Cut ropes into 1” pieces. Place pieces on a lightly floured baking sheet. If dough is too soft to work with this at this point, place in freezer for 10 minutes to chill. 6) On the back side of a fork, roll each piece along the tines to create ridges and place back on baking sheet. 7) In a large pot of boiling salted water, cook gnocchi until it floats to the top, about 2 minutes. 8) Meanwhile, in a large skillet over medium heat, melt butter. Using a slotted spoon, add cooked gnocchi into melted butter. Season with several cranks of black pepper. Add Parmesan and Pecorino and toss until melted and pepper is fragrant, about 2 minutes. 9) Serve warm with more Parmesan.',
							rating: 5,
							ingredient: [
								{
									list:
										'4 large russet potatoes , 2 1/2 c. all-purpose flour , 2 large eggs , 2 tsp. kosher salt , Freshly ground black pepper , 4 tbsp. butter , 1/2 freshly grated Parmesan , 1/4 c. freshly grated Pecorino',
								},
							],
						},
						{
							name: 'The Best Chocolate Chip Cookie Recipe Ever',
							desc:
								'This is the best chocolate chip cookie recipe ever. No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time! ',
							prepTime: '10 mins',
							totalTime: '30 mins',
							yield: '36 servings',
							instructions:
								'1) Preheat oven to 400°. Poke potatoes all over with a fork and place directly on oven racks. Bake until easily pierced with a knife, about 1 hour.  Let cool slightly. 2) When potatoes are cool enough to handle, cut in half and scoop out insides. Discard skins. Run potatoes through a ricer or mash well with a fork. 3) In a large bowl, combine riced potatoes, flour, eggs, salt, and a little pepper until a dough forms. 4) Turn dough onto a lightly floured surface and knead until smooth, about 3 minutes. 5) Divide dough into 4 pieces. Using your hands, roll each piece into a long rope, about ¾” in diameter. Cut ropes into 1” pieces. Place pieces on a lightly floured baking sheet. If dough is too soft to work with this at this point, place in freezer for 10 minutes to chill. 6) On the back side of a fork, roll each piece along the tines to create ridges and place back on baking sheet. 7) In a large pot of boiling salted water, cook gnocchi until it floats to the top, about 2 minutes. 8) Meanwhile, in a large skillet over medium heat, melt butter. Using a slotted spoon, add cooked gnocchi into melted butter. Season with several cranks of black pepper. Add Parmesan and Pecorino and toss until melted and pepper is fragrant, about 2 minutes. 9) Serve warm with more Parmesan.',
							rating: 3,
							ingredient: [
								{
									list:
										'1 cup salted butter* softened , 1 cup white (granulated) sugar , 1 cup light brown sugar packed , 2 tsp pure vanilla extract , 2 large eggs , 3 cups all-purpose flour , 1 tsp baking soda , ½ tsp baking powder , 1 tsp sea salt , 2 cups chocolate chips',
								},
							],
						},
					],
				},
				{
					include: [
						{
							association: [db.models.menu.dishes],
							include: [db.models.dish.ingredient],
						},
					],
				}
			)
			.then(function () {
				console.log('Did it!');
			});
	})
	.catch(function (err) {
		console.log(err);
	});
