'use strict';
module.exports = (sequelize, DataTypes) => {
  const fasiljateng = sequelize.define('fasiljateng', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  fasiljateng.associate = function(models) {
    // associations can be defined here
  };
  return fasiljateng;
};