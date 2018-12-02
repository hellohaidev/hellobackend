'use strict';
module.exports = (sequelize, DataTypes) => {
  const yogyakarta = sequelize.define('yogyakarta', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  yogyakarta.associate = function(models) {
    // associations can be defined here
  };
  return yogyakarta;
};