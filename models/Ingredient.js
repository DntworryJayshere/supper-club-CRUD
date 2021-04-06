class Ingredient extends Model {}
Ingredient.init(
	{
		// attributes
		list: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'ingredient',
		// options
	}
);

Menu.Dishes = Menu.hasMany(Dish, { though: 'MenuDishes' });
Dish.Ingredient = Dish.belongsTo(Ingredient, { though: 'DishIngredients' });

Menu.sync();
Dish.sync();
Ingredient.sync();
