'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasiljakarta = sequelize.define('fasiljakarta', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasiljakarta.associate = function(models) {
    // associations can be defined here
  };
  return fasiljakarta;
};