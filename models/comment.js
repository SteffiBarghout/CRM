module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 1000]
            }
        }
    });
    Comment.associate = function(models) {
        models.Comment.belongsto(models.Ticket);
    }
    Comment.associate = function(models) {
        models.Comment.belongsto(models.Users);
    }
    return Tickets;
};