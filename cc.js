var url1 = "http://128.122.151.182";           // the hub IP address
var username = "v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs"       // fill in your Hub-given username here
var usernameField;
var addressField;
var controlArray = new Array(); 
var url;
var lightOne = 4;
var lightTwo = 5;
var lights = [];


function setup()
{
lights.push(lightOne);
lights.push(lightTwo);
}

function connect() {
 
  controlArray = [];    
  url = url1 + '/api/' + username + '/lights/4'  ;        
  //url = "http://" + addressField.value() + '/api/' + usernameField.value() + '/lights/';
  //httpGet(url, getLights);
}

function getLights(result) {
  var lights = JSON.parse(result);		
  for (thisLight in lights) {			    
   	controlArray.push(??);    
    createControl(lights[thisLight], controlDiv);
    	
  }
}

function createControl(thisLight, thisDiv) {
  var state = thisLight.state;	
  var myLabel;                  
}

function changeName() {
    var payload = {"name": lightName};        
    setLight(thisLight, payload, 'name');     
}

function changeProperty() {
  var payload = {};
  payload[thisControl] = Number(value);   
	if (thisControl === 'on') {
    payload[thisControl] = event.target.checked;
  }

  setLight(thisLight, payload, 'state');	
}

function setLight(lightNumber, data, command) {
  var path = url + lightTwo + '/' + command;		
  var content = JSON.stringify(data);				  
  // HttpDo seems to have a bug in it when it comes to PUT, so I've
  // used jQuery instead here.
  //httpDo( path, 'PUT', content, 'text', getLights);

  var requestParams = {
    type: "PUT",					  // use the PUT method
    url: path,						  // URL to call
    data: content,					// body of the request
    dataType: 'text'		// data type of the body
  };

  var request = $.ajax(requestParams, getLights);
}

