class Dish extends Model {}
Dish.init(
	{
		// attributes
		step_1: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		step_2: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		step_3: {
			type: DataTypes.STRING,
		},
		step_4: {
			type: DataTypes.STRING,
		},
		step_5: {
			type: DataTypes.STRING,
		},
		step_6: {
			type: DataTypes.STRING,
		},
		step_7: {
			type: DataTypes.STRING,
		},
		step_8: {
			type: DataTypes.STRING,
		},
		step_9: {
			type: DataTypes.STRING,
		},
		step_10: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: 'directions',
		// options
	}
);
