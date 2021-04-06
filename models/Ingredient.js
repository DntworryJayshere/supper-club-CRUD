class Ingredient extends Model {}
Ingredient.init(
	{
		// attributes
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		quanitity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		measurment_unit: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		measurment_descriptor: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: 'ingredient',
		// options
	}
);

Ingredient.sync();
