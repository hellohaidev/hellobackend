'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasilyogya = sequelize.define('fasilyogya', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasilyogya.associate = function(models) {
    // associations can be defined here
  };
  return fasilyogya;
};