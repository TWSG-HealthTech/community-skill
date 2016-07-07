'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Activities', [
      { activity: 'Football', onMonday: true, onTuesday: false, onWednesday: true, onThursday: false, onFriday: true, onSaturday: false, onSunday: true, location: "Address 1", timeStart: "09:00:00", timeEnd: "11:00:00", createdAt: new Date(), updatedAt: null },
      { activity: 'Football', onMonday: true, onTuesday: false, onWednesday: true, onThursday: false, onFriday: true, onSaturday: false, onSunday: true, location: "Address 3", timeStart: "13:00:00", timeEnd: "14:00:00", createdAt: new Date(), updatedAt: null },
      { activity: 'Tennis', onMonday: true, onTuesday: true, onWednesday: true, onThursday: false, onFriday: false, onSaturday: false, onSunday: false, location: "Address 2", timeStart: "17:00:00", timeEnd: "19:00:00", createdAt: new Date(), updatedAt: null }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Activities', null, {});
  }
};
