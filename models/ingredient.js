module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("ingredient", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Ingredient.associate = function (models) {
        Ingredient.hasMany(models.Dish);
    };
    return Ingredient;
};