module.exports = function(sequelize, DataTypes) {
    var Tickets = sequelize.define("Tickets", {
        ticketTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 200]
            }
        },
        ticketText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 1000]
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Tickets.associate = function(models) {
        models.Tickets.hasMany(models.Comments, { onDelete: 'cascade' });
    }
    Tickets.associate = function(models) {
        models.Tickets.belongsTo(models.Customers);
    }
    Tickets.associate = function(models) {
        models.Tickets.belongsTo(models.Users);
    }
    return Tickets;
};