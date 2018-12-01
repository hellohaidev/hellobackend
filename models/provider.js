'use strict';
module.exports = (sequelize, DataTypes) => {
  const provider = sequelize.define('provider', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  provider.associate = function(models) {
    // associations can be defined here
  };
  return provider;
};