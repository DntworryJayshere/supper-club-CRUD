module.exports = (sequelize, DataTypes) => {
	const Menu = sequelize.define(
		'menu',
		{
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false,
			},
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
		},
		{
			freezeTableName: true,
		}
	);
	return Menu;
};
