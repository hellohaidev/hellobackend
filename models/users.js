'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    nip: DataTypes.STRING,
    nama: DataTypes.STRING,
    pangkat: DataTypes.STRING,
    golongan: DataTypes.STRING,
    jenjang_jabatang: DataTypes.STRING,
    nama_jabatan: DataTypes.STRING,
    unit_kerja: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    date_born: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};