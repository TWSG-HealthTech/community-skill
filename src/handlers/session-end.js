var helpers = require("../helpers.js");

exports.handle = function(callback) {
    var cardTitle = "Session Ended";
    var speechOutput = "Thank you for trying the Alexa Skills Kit sample. Have a nice day!";
    // Setting this to true ends the session and exits the skill.
    var shouldEndSession = true;

    callback({}, helpers.buildSpeechletResponse(cardTitle, speechOutput, null, shouldEndSession));
}