'use strict';
module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('Note', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source_work: DataTypes.STRING,
    source_author: DataTypes.STRING
  });
  Note.associate = (models) => {
    Note.hasMany(models.Label, {
      foreignKey: 'noteId',
      as: 'labels',
    });
  };

  return Note;
};