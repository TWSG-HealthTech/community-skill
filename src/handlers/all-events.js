var helpers = require("../helpers.js");

exports.handle = function(intent, session, callback) {
    var repromptText = null;
    var sessionAttributes = {};
    var shouldEndSession = true;
    var speechOutput = "This is a placeholder";

    // Setting repromptText to null signifies that we do not want to reprompt the user.
    // If the user does not respond or says something that is not understood, the session
    // will end.
    callback(sessionAttributes,
         helpers.buildSpeechletResponse(intent.name, speechOutput, repromptText, shouldEndSession));
}