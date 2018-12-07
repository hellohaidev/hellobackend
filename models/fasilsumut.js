'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasilsumut = sequelize.define('fasilsumut', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasilsumut.associate = function(models) {
    // associations can be defined here
  };
  return fasilsumut;
};