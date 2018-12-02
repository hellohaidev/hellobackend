'use strict';
module.exports = (sequelize, DataTypes) => {
  const lampung = sequelize.define('lampung', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  lampung.associate = function(models) {
    // associations can be defined here
  };
  return lampung;
};