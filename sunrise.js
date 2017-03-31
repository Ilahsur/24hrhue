//40.7128° N, 74.0059° W - NYC

// you can do this with http or https:
var http = require('http');
var express = require('express');     // include express.js
var app = express();  

app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

/*
 set up the options for the request.
 the full URL in this case is:
 http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
 https://dweet.io:443/get/latest/dweet/for/equable-men
*/
var options = {
  host: 'api.sunrise-sunset.org',
  //port: 8080,
  path: '/json?lat=40.7127837&lng=-74.0059413'
};

/*
	the callback function to be run when the response comes in.
	this callback assumes a chunked response, with several 'data'
	events and one final 'end' response.
*/
function callback(response) {
  var result = '';		// string to hold the response

  // as each chunk comes in, add it to the result string:
  response.on('data', function (data) {
    result += data;
  });

  // when the final chunk comes in, print it out:
  response.on('end', function () {
    console.log(result);
  });
}

var request = http.request(options, callback);
request.end();


