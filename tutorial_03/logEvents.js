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
    const dateTime = `${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`;
    const logItem = `${dateTime}/t${uuid()}/t${message}`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem); 
    }catch(err){
        console.log(err);
    }
}

module.exports = logEvents;
//task is running ok! log falder creaded with 
//eventLog.txt (05092023	15:01:40/t8d61217c-90fb-4bff-aa93-c7eb93e0b2d8/tLog 
//event emitted!05092023	15:02:07/t4fa8b3dc-2f93-4adb-a552-692ed7cb4244/tLog 
//event emitted!05092023	15:02:11/tb7ad9d15-adc2-4aa1-903e-210771f3d98e/tLog 
//event emitted!)

//console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'));

//console.log('hello');
//console.log(uuid());
//console.log(); //uuid will auto add new id with every .log()
//we add npm i nodemon -D as dev dependance

//now we install npm i uuid  we can also update npm modules and delete them
//npm update, npm install -g npm@latest, 
//npm uninstall package-name, npm uninstall -g package-name и др
