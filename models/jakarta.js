'use strict';
module.exports = (sequelize, DataTypes) => {
  const jakarta = sequelize.define('jakarta', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  jakarta.associate = function(models) {
    // associations can be defined here
  };
  return jakarta;
};