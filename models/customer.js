module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define(
        "Customer", {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1],
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1],
                },
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1],
                },
            },
            phone: {
                type: DataTypes.INTEGER,
                validate: {
                    len: [10],
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    len: [8]
                }
            },

        }
    );
    Customer.associate = function(models) {
        models.Customer.belongsTo(models.Users);
    };
    Customer.associate = function(models) {
        models.Customer.hasMany(models.Ticket, { onDelete: 'cascade' });
    };
    Customer.associate = function(models) {
        models.Customer.hasMany(models.Note, { onDelete: 'cascade' });
    };
    return Customer;
};