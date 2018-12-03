'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasillampung = sequelize.define('fasillampung', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasillampung.associate = function(models) {
    // associations can be defined here
  };
  return fasillampung;
};