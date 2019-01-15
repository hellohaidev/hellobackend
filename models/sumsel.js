'use strict';
module.exports = (sequelize, DataTypes) => {
  const sumsel = sequelize.define('sumsel', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  sumsel.associate = function(models) {
    // associations can be defined here
  };
  return sumsel;
};