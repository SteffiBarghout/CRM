module.exports = function (sequelize, DataTypes) {
  var Notes = sequelize.define("Notes", {
    noteText: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 1000],
      },
    },
  });
  Notes.associate = function (models) {
    models.Notes.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.Notes.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Notes;
};
