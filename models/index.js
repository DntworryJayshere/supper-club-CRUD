'use strict';

const { Sequelize, Model, DataTypes } = require('sequelize');

var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

if (config.use_env_variable) {
	var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
	var sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

module.exports = sequelize;
