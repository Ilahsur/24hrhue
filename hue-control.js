var express = require('express');
var app = express();

////////HTTP/////////
var http = require('http');

//Port and server setup
var port = process.env.PORT || 5555;

//Server
var server = app.listen(port);

var datafile = require('./sunrise.js');

var hue = require("node-hue-api"),// include the node-hue-api library
HueApi = hue.HueApi// make a local instance of HueAp

var scheduledEvent = hue.scheduledEvent;
var mySchedule = scheduledEvent.create();

var address = '128.122.151.182';  // hub IP address from command line
var username = 'v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs';

var api = new HueApi(address, username);
var state;

var d = new Date();
var dstr = d.toTimeString();
// console.log(dstr);

var displayResult = function(result) {
    //console.log(result);
};

var displayError = function(err) {
    //console.error(err);
};

var suntime = datafile.T ;
//console.log(suntime);

var displayResults = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

//state = lightState.create().on().white(500, 100);

scheduledEvent = {
    "name": "Sample Schedule",
    "description": "A sample scheduled event to switch on a light",
    "time": "2017-04-02T17:50:00",
    "command": {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
            "on": false
        }
    },
    "localtime": "2017-04-02T17:49:00"
};

api.createSchedule(mySchedule)
    .then(displayResult)
    .done();
 
// -------------------------- 
// Using a callback 
api.createSchedule(mySchedule, function(err, result) {
    if (err) throw err;
    displayResult(result);
});

api.scheduleEvent(scheduledEvent)
    .then(displayResults)
    .done();



// api.setLightState
// (4, 
// 	{"on": false
// }) // provide a value of false to turn off
//     .then(displayResult)
//     .fail(displayError)
//     .done();

// var displayResult = function(result) {
//     console.log(JSON.stringify(result, null, 2));
// };


// api.getFullState(function(err, config){
// if(err) throw err
// displayResult(config)
// })