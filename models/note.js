module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
        noteText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 1000]
            }
        }
    });
    Note.associate = function(models) {
        models.Note.belongsto(models.Customer);
    }
    Note.associate = function(models) {
        models.Note.belongsto(models.Users);
    }
    return Note;
};