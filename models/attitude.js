'use strict';
module.exports = (sequelize, DataTypes) => {
  const attitude = sequelize.define('attitude', {
    description: DataTypes.TEXT
  }, {});
  attitude.associate = function(models) {
    // associations can be defined here
  };
  return attitude;
};