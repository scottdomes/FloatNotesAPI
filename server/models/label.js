'use strict';
module.exports = (sequelize, DataTypes) => {
  var Label = sequelize.define('Label', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  Label.associate = (models) => {
    Label.belongsTo(models.Note, {
      foreignKey: 'noteId',
      onDelete: 'CASCADE',
    });
  };

  return Label;
};