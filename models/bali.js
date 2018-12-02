'use strict';
module.exports = (sequelize, DataTypes) => {
  const bali = sequelize.define('bali', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  bali.associate = function(models) {
    // associations can be defined here
  };
  return bali;
};