var hue = require("node-hue-api"),	// include the node-hue-api library
	HueApi = hue.HueApi,							// make a local instance of HueApi
	hub, 															// will hold the hub info when you instantiate it
	lightState = hue.lightState;

hub = new HueApi(address, username);

var address = 	'http://128.122.151.182/'	// hub IP address from command line
	username = 	'v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs'// your app's username from the command line

var result = data.split(',');
var lightNumber = 5;
var color = 25, 100, 200];
var bri = 200;
var time = ;
setLight();
	

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));	
};

// set a light's state using parameters given:
function setLight() {
	var state = lightState.create()
		.rgb(color)
		.brightness(bri)
		.transitionTime(time)
		.on();

	// use it to set the state of a light on the hub:
	 hub.setLightState(thisLight, state)
     .then(displayResult)
     .done();
}
//////////////////////////////////////
var express = require('express');
var app = express();

////////HTTP/////////
var http = require('http');

//Port and server setup
var port = process.env.PORT || 5555;

//Server
var server = app.listen(port);

//Console the port
console.log('Server is running localhost on port: ' + port );


//Philips API bullshit
var hue = require("node-hue-api"),// include the node-hue-api library
HueApi = hue.HueApi// make a local instance of HueAp


var address = '128.122.151.182';  // hub IP address from command line
var username = 'PT8velPMzMYF-pRN1hWOgNU2Kpv5ieyqWxSdCoXp'
var hub = new HueApi(address, username);

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};


hub.getFullState(function(err, config){
if(err) throw err
displayResult(config)
})



