module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define(
        "Users", {
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
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1],
                },
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    len: [1],
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                    notEmpty: true
                }
            },
            profImg: {
                type: DataTypes.STRING,
                defaultValue: "https://images-test-hss.s3.us-east-2.amazonaws.com/ProfileImgs/default.jpg",
                allowNull: true,
            },

        }, {
            timestamps: false,
            freezeTableName: true,
        }
    );
    Users.associate = function(models) {
        models.Users.hasMany(models.Customer, { onDelete: 'cascade' });
    };
    Users.associate = function(models) {
        models.Users.hasMany(models.Ticket, { onDelete: 'cascade' });
    };
    Users.associate = function(models) {
        models.Users.hasMany(models.Comment, { onDelete: 'cascade' });
    };
    Users.associate = function(models) {
        models.Users.hasMany(models.Note, { onDelete: 'cascade' });
    };
    return Users;
};