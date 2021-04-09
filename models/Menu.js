module.exports = (sequelize, DataTypes) => {
	const Menu = sequelize.define('menu', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		short_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	return Menu;
};
