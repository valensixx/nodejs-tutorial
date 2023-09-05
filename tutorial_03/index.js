const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };
/*
In JavaScript, a class is a blueprint or a template for creating objects. 
It provides a convenient way to define and create objects with 
shared properties and methods.
*/

//initialize object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);