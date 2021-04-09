module.exports = (sequelize, DataTypes) => {
	const Dish = sequelize.define('dish', {
		// attributes
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		prep_time: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		total_time: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		servings: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		yield: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		menu_fk_id: {
			type: DataTypes.INTEGER,
			references: {
				// This is a reference to another model
				model: Menu,
				// This is the column name of the referenced model
				key: 'id',
			},
		},
	});

	return Dish;
};
