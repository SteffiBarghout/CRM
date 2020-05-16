module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define(
    "Users",
    {
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
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Users;
};
