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

exports.handle = function(intent, session, callback) {
    var repromptText = null;
    var sessionAttributes = {};
    var shouldEndSession = true;
    var speechOutput = "This is a placeholder";

    var activity = intent.slots.Activity.value;
    var date = moment(intent.slots.Date.value, "YYYY-MM-DD");

    var query = {
        activity: activity
    };

    setDateQuery(query, date);

    db.Activity.findAll({
        where: query
    }).then((activities) => {
        console.log("find result", _.map(activities, a => a.dataValues));

        callback(sessionAttributes,
            helpers.buildSpeechletResponse(intent.name, speechOutput, repromptText, shouldEndSession));
    });
}