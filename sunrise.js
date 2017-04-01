//40.7128° N, 74.0059° W - NYC
//v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs - username

var http = require('http');
var express = require('express');     
var app = express();  
var result = '';  
var kuchbhi = '';
var sunrise;
var somename;

app.use(express.static('public'));


var options = {
  host: 'api.sunrise-sunset.org',
  path: '/json?lat=40.7127837&lng=-74.0059413'
};

function callback(response) {
  	response.on('data', function (data) {
    result += data;
    kuchbhi = JSON.parse(result);
  });

  response.on('end', function () {
    somename = kuchbhi['results'];
    sunrise = somename['sunrise'];
    //console.log(result);
    console.log(somename['sunrise']);
  });
}

var request = http.request(options, callback);
request.end();
//console.log(somename);

var d = new Date(); 
//console.log(d.getHours()+" "+d.getMinutes()+" "+d.getSeconds()+" "); 
var offset = new Date().getTimezoneOffset();

// var content = JSON.stringify(result);
// console.log(content);


