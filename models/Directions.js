module.exports = (sequelize, DataTypes) => {
	const Directions = sequelize.define('directions', {
		// attributes
		order_number: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dish_fk_id: {
			type: DataTypes.INTEGER,
			references: {
				// This is a reference to another model
				model: Dish,
				// This is the column name of the referenced model
				key: 'id',
			},
		},
	});

	return Directions;
};
