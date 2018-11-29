'use strict';
module.exports = (sequelize, DataTypes) => {
  const quote = sequelize.define('quote', {
    description: DataTypes.TEXT
  }, {});
  quote.associate = function(models) {
    // associations can be defined here
  };
  return quote;
};