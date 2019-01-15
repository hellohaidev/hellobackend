'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasilsumsel = sequelize.define('fasilsumsel', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasilsumsel.associate = function(models) {
    // associations can be defined here
  };
  return fasilsumsel;
};