module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 1000]
            }
        }
    });
    Comments.associate = function(models) {
        models.Comments.belongsTo(models.Tickets);
    };
    Comments.associate = function(models) {
        models.Comments.belongsTo(models.Users);
    };
    return Comments;
};