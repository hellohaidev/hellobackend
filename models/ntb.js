'use strict';
module.exports = (sequelize, DataTypes) => {
  const ntb = sequelize.define('ntb', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  ntb.associate = function(models) {
    // associations can be defined here
  };
  return ntb;
};