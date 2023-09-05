//console.log('testing!')
//result is 'testing!'  To stop nodemon ctrl + c 

//now we istalled npm init - that creaded our package.json

//now we use npm i date-fns

const {format} = require('date-fns');
const {v4:uuid} = require('uuid');

//import common core modules fs, promices and path:
const fs = require('fs');
const fsPromises = require('fs').promises; 
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
}

console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'));

console.log('hello');
console.log(uuid());
console.log(); //uuid will auto add new id with every .log()
//we add npm i nodemon -D as dev dependance

//now we install npm i uuid  we can also update npm modules and delete them
//npm update, npm install -g npm@latest, 
//npm uninstall package-name, npm uninstall -g package-name и др
