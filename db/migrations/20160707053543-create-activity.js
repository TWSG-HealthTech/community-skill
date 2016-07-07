'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activity: {
        type: Sequelize.STRING(100)
      },
      onMonday: {
        type: Sequelize.BOOLEAN
      },
      onTuesday: {
        type: Sequelize.BOOLEAN
      },
      onWednesday: {
        type: Sequelize.BOOLEAN
      },
      onThursday: {
        type: Sequelize.BOOLEAN
      },
      onFriday: {
        type: Sequelize.BOOLEAN
      },
      onSaturday: {
        type: Sequelize.BOOLEAN
      },
      onSunday: {
        type: Sequelize.BOOLEAN
      },
      location: {
        type: Sequelize.STRING(250)
      },
      timeStart: {
        type: Sequelize.TIME
      },
      timeEnd: {
        type: Sequelize.TIME
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Activities');
  }
};