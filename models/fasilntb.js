'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasilntb = sequelize.define('fasilntb', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasilntb.associate = function(models) {
    // associations can be defined here
  };
  return fasilntb;
};