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

      profImg: {
        type: DataTypes.STRING,
        defaultValue:
          "https://images-test-hss.s3.us-east-2.amazonaws.com/ProfileImgs/default.jpg",
      },

    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Users;
};
