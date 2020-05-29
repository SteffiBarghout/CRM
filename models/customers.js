module.exports = function (sequelize, DataTypes) {
  var Customers = sequelize.define(
    "Customers",
    {
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
      // city: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     len: [1],
      //   },
      // },
      // state: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     len: [1],
      //   },
      // },
      // zipCode: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     len: [1],
      //   },
      // },
      phone: {
        type: DataTypes.STRING,
        validate: {
          len: [10],
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [8],
        },
      },
    },
    {
      timestamps: false,
    }
  );
  Customers.associate = function (models) {
    models.Customers.hasMany(models.Tickets, {
      onDelete: "cascade",
    });
    models.Customers.belongsTo(models.Users);

    models.Customers.hasMany(models.Notes, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Customers;
};
