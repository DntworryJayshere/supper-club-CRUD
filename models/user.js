module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
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
    });

    User.associate = function (models) {
        User.hasMany(models.Menu);
        User.hasMany(models.Group);
    };
    return User;
};