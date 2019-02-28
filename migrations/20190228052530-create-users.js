'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nip: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      pangkat: {
        type: Sequelize.STRING
      },
      golongan: {
        type: Sequelize.STRING
      },
      jenjang_jabatang: {
        type: Sequelize.STRING
      },
      nama_jabatan: {
        type: Sequelize.STRING
      },
      unit_kerja: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      date_born: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};