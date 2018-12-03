'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasiljatim = sequelize.define('fasiljatim', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasiljatim.associate = function(models) {
    // associations can be defined here
  };
  return fasiljatim;
};