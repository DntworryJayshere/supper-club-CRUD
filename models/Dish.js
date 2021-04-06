class Dish extends Model {}
Dish.init(
	{
		// attributes
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		desc: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		prepTime: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		totalTime: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		yield: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		instructions: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				min: 1,
				max: 5,
				len: 1,
			},
		},
	},
	{
		sequelize,
		modelName: 'dish',
		// options
	}
);
