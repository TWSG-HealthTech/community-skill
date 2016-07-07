'use strict';
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('Activity', {
    activity: DataTypes.STRING(100),
    onMonday: DataTypes.BOOLEAN,
    onTuesday: DataTypes.BOOLEAN,
    onWednesday: DataTypes.BOOLEAN,
    onThursday: DataTypes.BOOLEAN,
    onFriday: DataTypes.BOOLEAN,
    onSaturday: DataTypes.BOOLEAN,
    onSunday: DataTypes.BOOLEAN,
    location: DataTypes.STRING(250),
    timeStart: DataTypes.TIME,
    timeEnd: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Activity;
};