'use strict';
module.exports = (sequelize, DataTypes) => {
  const jatim = sequelize.define('jatim', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  jatim.associate = function(models) {
    // associations can be defined here
  };
  return jatim;
};