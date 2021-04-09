const dbConfig = require('../config/db.config.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
	define: {
		freezeTableName: true,
	},
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.menu = require('./Menu.js')(sequelize, DataTypes);
db.dish = require('./Dish.js')(sequelize, DataTypes);
db.ingredient = require('./Ingredient.js')(sequelize, DataTypes);
db.directions = require('./Directions.js')(sequelize, DataTypes);

module.exports = db;
