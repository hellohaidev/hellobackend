'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasilbali = sequelize.define('fasilbali', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasilbali.associate = function(models) {
    // associations can be defined here
  };
  return fasilbali;
};