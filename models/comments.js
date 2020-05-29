module.exports = function (sequelize, DataTypes) {
  var Comments = sequelize.define(
    "Comments",
    {
      commentText: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 1000],
        },
      },
    },
    {
      timestamps: false,
    }
  );
  Comments.associate = function (models) {
    models.Comments.belongsTo(models.Tickets, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.Comments.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Comments;
};
