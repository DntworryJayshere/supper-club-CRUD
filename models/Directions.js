module.exports = (sequelize, DataTypes) => {
	const Directions = sequelize.define(
		'directions',
		{
			// attributes
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			order_number: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			// dish_fk_id: {
			// 	type: DataTypes.INTEGER,
			// 	references: {
			// 		// This is a reference to another model
			// 		model: Dish,
			// 		// This is the column name of the referenced model
			// 		key: 'id',
			// 	},
			// },
		},
		{
			freezeTableName: true,
		}
	);
	Directions.associate = (models) => {
		Directions.belongsTo(models.dish, {
			onDelete: 'CASCADE',
			foreignKey: 'id',
		});
	};
	return Directions;
};
