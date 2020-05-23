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
            profImg: {
                type: DataTypes.STRING,
                defaultValue: "https://images-test-hss.s3.us-east-2.amazonaws.com/ProfileImgs/default.jpg",
            },

        }, {
            timestamps: false,
            freezeTableName: true,
        }
    );
    Customer.associate = function(models) {
        models.Customer
    }
    return Customer;
};