'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasiljabar = sequelize.define('fasiljabar', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasiljabar.associate = function(models) {
    // associations can be defined here
  };
  return fasiljabar;
};