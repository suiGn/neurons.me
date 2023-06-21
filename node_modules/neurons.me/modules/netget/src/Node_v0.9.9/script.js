var methods = require('./methods/methods.js'); 
var pwd = __dirname;
const WebSocketClient = require('ws');
const os = require('os');
var socket = new WebSocketClient("ws://localhost:8080/");

//DOCS https://nodejs.org/docs/latest-v17.x/api/os.html
console.log("OS DATA:");
console.log(os.arch());
//console.log(os.constants);
//Returns an array of objects containing information about each logical CPU core.
console.log(os.cpus());
console.log(os.arch());
console.log(os.arch());
console.log(os.arch());
console.log(os.arch());

socket.on('open', function open() {
	console.log('NetGet On.');
	socket.send('?PROTO');
  });

socket.on('message', function message(data) {
	console.log(data);
  });




    

	