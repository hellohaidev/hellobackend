'use strict';
module.exports = (sequelize, DataTypes) => {
  const jateng = sequelize.define('jateng', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  jateng.associate = function(models) {
    // associations can be defined here
  };
  return jateng;
};