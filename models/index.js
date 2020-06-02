"use strict";

const {
  Sequelize,
  Model,
  DataTypes
} = require('sequelize');

// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];

// if (config.use_env_variable) {
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }


//=================================================================================================================

class Menu extends Model { }
Menu.init({
  // attributes
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'menu'
  // options
});

Menu.sync();

//=================================================================================================================

// class Dish extends Model { }
// Dish.init({
//     // attributes
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     desc: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     rating: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 5,
//             len: 1
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'dish'
//     // options
// });

// Dish.sync();

// //=================================================================================================================

// class Ingredient extends Model { }
// Ingredient.init({
//     // attributes
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     desc: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     }
// }, {
//     sequelize,
//     modelName: 'ingredient'
//     // options
// });

// Ingredient.sync();


// //=================================================================================================================

// class User extends Model { }
// User.init({
//     // attributes
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     phone: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     rating: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 5,
//             len: 1
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'user'
//     // options
// });


// User.sync();

// //=================================================================================================================

// class Group extends Model { }
// Group.init({
//     // attributes
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     desc: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     sequelize,
//     modelName: 'group'
//     // options
// });

// Group.sync();

//=================================================================================================================

module.exports = sequelize;
