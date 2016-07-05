var welcome = require("./welcome.js");
var sessionEnd = require("./session-end.js");
var allEvents = require("./all-events.js")

exports.handle = function(intentRequest, session, callback) {
    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if ("AllEventsIntent" === intentName) {
        allEvents.handle(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        welcome.handle(callback);
    } else if ("AMAZON.StopIntent" === intentName || "AMAZON.CancelIntent" === intentName) {
        sessionEnd.handle(callback);
    } else {
        throw "Invalid intent";
    }
}