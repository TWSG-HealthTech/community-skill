var helpers = require("../helpers.js");
var db = require("../models");
var _ = require("lodash");
var moment = require("moment");

function setDateQuery(query, date) {
    switch(date.day()) {
        case 0:
            query.onSunday = 1;
            break;
        case 1:
            query.onMonday = 1;
            break;
        case 2:
            query.onTuesday = 1;
            break;
        case 3:
            query.onWednesday = 1;
            break;
        case 4:
            query.onThursday = 1;
            break;
        case 5:
            query.onFriday = 1;
            break;
        case 6:
            query.onSaturday = 1;
            break; 
    }
}

function formatDay(activity) {
    var days = [];
    if(activity.onMonday == true) {
        days.push("Monday");
    }

    if(activity.onTuesday == true) {
        days.push("Tuesday");
    }

    if(activity.onWednesday == true) {
        days.push("Wednesday");
    }

    if(activity.onThursday == true) {
        days.push("Thursday");
    }

    if(activity.onFriday == true) {
        days.push("Friday");
    }

    if(activity.onSaturday == true) {
        days.push("Saturday");
    }

    if(activity.onSunday == true) {
        days.push("Sunday");
    }

    return days.join(", ");
}

exports.handle = function(intent, session, callback) {
    var repromptText = null;
    var sessionAttributes = {};
    var shouldEndSession = true;
    var speechOutput = [];

    var activity = intent.slots.Activity.value;
    var date = moment(intent.slots.Date.value, "YYYY-MM-DD");

    var query = {
        activity: activity
    };

    setDateQuery(query, date);

    db.Activity.findAll({
        where: query
    }).then((activities) => {
        speechOutput.push(`there are ${activities.length} activities`);
        _.forEach(activities, a => speechOutput.push(`${a.activity} at ${a.location} every ${formatDay(a)}, starts at ${a.timeStart}, ends at ${a.timeEnd}`))

        callback(sessionAttributes,
            helpers.buildSpeechletResponse(intent.name, speechOutput.join(". "), repromptText, shouldEndSession));
    });
}