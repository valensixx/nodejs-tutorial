const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };
/*
In JavaScript, a class is a blueprint or a template for creating objects. 
It provides a convenient way to define and create objects with 
shared properties and methods.
*/

//initialize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

//setting up our server:
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); //result: Server running on port 3500 // / GET

//add listener for the log event
/*
myEmitter.on('log', (msg) => logEvents(msg));


    myEmitter.emit('log', 'Log event emitted!');
*/