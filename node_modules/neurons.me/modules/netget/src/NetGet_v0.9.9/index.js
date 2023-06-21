#!/usr/bin/env node
/* 
 __   _ _______ _______  ______ _______ _______
 | \  | |______    |    |  ____ |______    |   
 |  \_| |______    |    |_____| |______    | 
coded by SuiGn.
 */
var http = require('http');
const details = require('./methods/details');
//const method = require('./methods/methods');

var httpServer = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
httpServer.listen(8080, function() {
    console.log(details.netGetPrint + "On Port: 8080");
});
 
/**                                     o       o                               
     	  _____ ___ ___  ___   ___ _  _____ _____ 
\ \    / / __| _ ) __|/ _ \ / __| |/ / __|_   _|
 \ \/\/ /| _|| _ \__ \ (_) | (__| ' <| _|  | |  
  \_/\_/ |___|___/___/\___/ \___|_|\_\___| |_| 
				        Websocket managment. **/
// Importing the required modules
const WebSocketServer = require('ws');
const PROTO = "NG22"; 
const socket = new WebSocketServer.Server({ server: httpServer })
/*******************..............
* WEBSOCKET METHODS and Functions*
*******************..............*/ 
var method = require('./methods/methods.js'); 
var clients = [ ];
/*******************
* WEBSOCKET INIT  *
*******************/
socket.on('connection', function connection(connection, req) {
let privateHASH = method.randomHASH;
var index = clients.push(connection) - 1;
const remoteAddress_ip = req.socket.remoteAddress;
console.log((new Date()) + " Connection accepted. Peer:" + remoteAddress_ip +  " Online Clients: " + clients.length);

//COMMUNICATION
connection.send(JSON.stringify({ 
    proto: PROTO,
    publicHASH: method.randomHASH, 
    type:'init0'
    }));

    connection.on('message', function message(data) {
      console.log('received: %s', data, remoteAddress_ip);
    });
  
    connection.send('something');
  });

    