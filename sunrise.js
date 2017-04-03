//40.7128° N, 74.0059° W - NYC
//v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs - username

var x = 4;
exports.X = x;

var http = require('http');
var express = require('express');     
var app = express();  

var sunrisetimelocal;
var sunrisetimestr;
exports.T = sunrisetimelocal;
var result = '';  
var parsedata = '';
var sunrisetime;
var insidejson;
var moment = require('moment');
moment().format();

app.use(express.static('public'));

var options = {
  host: 'api.sunrise-sunset.org',
  path: '/json?lat=40.7127837&lng=-74.0059413'
};

function callback(response) {
  	response.on('data', function (data) {
    result += data;
    parsedata = JSON.parse(result);
    
  });

  response.on('end', function () {
    insidejson = parsedata['results'];
    sunrisetime = insidejson['sunrise']; //10:36:12 AM
    sunrisetimestr = moment(sunrisetime, 'hh:mm:ss a');
    sunrisetimelocal = moment(sunrisetimestr).subtract(4, 'hours').format();  
  });
}

var request = http.request(options, callback);
request.end();

var offset = new Date().getTimezoneOffset();

console.log(result);




