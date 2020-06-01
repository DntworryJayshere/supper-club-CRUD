var Model = Sequelize.Model;
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

module.exports = Menu;