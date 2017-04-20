var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    scheduleEvent = hue.scheduledEvent;

var displayResult = function (result) {
    console.log(JSON.stringify(result, null, 2));
};

var d = new Date();
var dstr = d.toTimeString();
//console.log(dstr);

var host = "",
    username = "",
    api = new HueApi(host, username),
    mySchedule1,
    mySchedule2,
    mySchedule3,
    mySchedule4,
    mySchedule5;


mySchedule1 = scheduleEvent.create()
    .withName("Midnight")
    .withDescription("startof24hours")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
            "on": false,
            //"bri": 50,
        }
    })
    .on("2017-04-02T20:10:00");

mySchedule2 = scheduleEvent.create()
    .withName("midnighttodusk")
    .withDescription("whathappensinthedark")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
        "method" : "PUT",
        "body"   : {
            "on": true,
            "bri": 254,
            "hue": 25500, //red 25500 is green and 46920 is blue
            "sat": 104,
              "effect": "colorloop",
              "xy": [
                    0.3944,
                    0.2952
                  ]
        }
    })
    .on("2017-04-02T20:11:00");



// --------------------------
// Using a promise
// api.createSchedule(mySchedule)
//     .then(displayResult)
//     .done();

// --------------------------
// Using a callback
api.createSchedule(mySchedule1, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys1");
});
api.createSchedule(mySchedule2, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys2");
});
