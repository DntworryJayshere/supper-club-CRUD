module.exports = (sequelize, DataTypes) => {
	const Ingredient = sequelize.define(
		'ingredient',
		{
			// attributes
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			measurment_unit: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			measurment_descriptor: {
				type: DataTypes.STRING,
				allowNull: true,
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
	Ingredient.associate = function (models) {
		Ingredient.belongsTo(models.dish, {
			onDelete: 'CASCADE',
			foreignKey: 'id',
		});
	};
	return Ingredient;
};
