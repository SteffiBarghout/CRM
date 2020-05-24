module.exports = function(sequelize, DataTypes) {
    var Notes = sequelize.define("Notes", {
        noteText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 1000]
            }
        }
    });
    Notes.associate = function(models) {
        models.Notes.belongsTo(models.Customers);
    }
    Notes.associate = function(models) {
        models.Notes.belongsTo(models.Users);
    }
    return Notes;
};