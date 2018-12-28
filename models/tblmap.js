'use strict';
module.exports = (sequelize, DataTypes) => {
  const tblmap = sequelize.define('tblmap', {
    name: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longtitude: DataTypes.FLOAT,
    kode: DataTypes.INTEGER
  }, {});
  tblmap.associate = function(models) {
    // associations can be defined here
  };
  return tblmap;
};