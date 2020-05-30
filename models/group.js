module.exports = function (sequelize, DataTypes) {
    var Group = sequelize.define("group", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        host_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    });

    Group.associate = function (models) {
        Group.hasMany(models.User);
        Group.hasMany(models.Menu);
    };
    return Group;
};