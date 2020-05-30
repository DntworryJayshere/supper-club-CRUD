module.exports = function (sequelize, DataTypes) {
    var Menu = sequelize.define("menu", {
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // host_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    });

    Menu.associate = function (models) {
        Menu.hasMany(models.Dish);
    };
    return Menu;
};