'use strict';
module.exports = (sequelize, DataTypes) => {
  const sumut = sequelize.define('sumut', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  sumut.associate = function(models) {
    // associations can be defined here
  };
  return sumut;
};