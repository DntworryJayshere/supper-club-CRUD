module.exports = function (sequelize, DataTypes) {
    var Dish = sequelize.define("dish", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
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
        },
        // menu_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // ingredient_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // }
    });

    Dish.associate = function (models) {
        Dish.hasMany(models.Ingredient);
    };
    return Dish;
};
