module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
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
                len: []
            }
        }
    });
    // Ticket.associate = function(models) {
    //     models.Ticket.hasMany(models.Comment, { onDelete: 'cascade' });
    // }
    // Ticket.associate = function(models) {
    //     models.Ticket.belongsto(models.Customer);
    // }
    // Ticket.associate = function(models) {
    //     models.Ticket.belongsto(models.Users);
    // }
    return Ticket;
};