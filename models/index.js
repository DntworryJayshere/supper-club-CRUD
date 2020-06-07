"use strict";

const {
  Sequelize,
  Model,
  DataTypes
} = require('sequelize');

var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];

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

//=================================================================================================================

class Menu extends Model { }
Menu.init({
  // attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'menu'
  // options
});

// Menu.sync();

//=================================================================================================================

class Dish extends Model { }
Dish.init({
  // attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prepTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yield: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instructions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
      len: 1
    }
  }
}, {
  sequelize,
  modelName: 'dish'
  // options
});

// //=================================================================================================================

class Ingredient extends Model { }
Ingredient.init({
  // attributes
  list: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'ingredient'
  // options
});

Menu.Dishes = Menu.hasMany(Dish);
Dish.Ingredient = Dish.belongsTo(Ingredient);

Menu.sync();
Dish.sync();
Ingredient.sync();

// //=================================================================================================================

class User extends Model { }
User.init({
  // attributes
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
      len: 1
    }
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});


User.sync();

// //=================================================================================================================

class Group extends Model { }
Group.init({
  // attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'group'
  // options
});

Group.sync();

//=================================================================================================================

module.exports = sequelize;
