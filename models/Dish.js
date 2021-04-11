'use strict';
module.exports = (sequelize, DataTypes) => {
	const Dish = sequelize.define(
		'dish',
		{
			// attributes
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
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
			// menu_fk_id: {
			// 	type: DataTypes.INTEGER,
			// 	references: {
			// 		// This is a reference to another model
			// 		model: models.Menu,
			// 		// This is the column name of the referenced model
			// 		key: 'id',
			// 	},
			// },
		},
		{
			freezeTableName: true,
		}
	);
	Dish.associate = function (models) {
		Dish.hasOne(models.menu, {
			onDelete: 'SET NULL',
			foreignKey: 'id',
		});
	};
	return Dish;
};

// Menu.hasMany(Dish);
// Dish.belongsTo(Menu);

// Menu.hasMany(Dish, {
// 	through: 'OneMenu_ManyDish',
// });
// Dish.belongsToMany(Menu,{
// 	through: 'OneDish_ManyMenu',
// });
// Dish.hasMany(Menu,{
// 	through: 'DishMenu',
// });
