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

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    let filePath =
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'views', req.url, 'index.html')
                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url)
                    : path.join(__dirname, req.url);

    //makes the .html extension not required in the browser
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        //serve the file
    } else {
        //404
        //301 redirect
        //console.log(path.parse(filePath));

        //we got response:
        /*
            Server running on port 3500
            / GET
            {
             root: 'C:\\',
            dir: 'C:\\Users\\valen\\Desktop\\nodejs\\tutorial_03\\views',
            base: 'index.html',
            ext: '.html',
            name: 'index'
            }
        */

            switch(path.parse(filePath).base){
                case 'old-page.html':
                    res.writeHead(301,{'Location':'/new-page.html'});
                    res.end();
                    break;
                case 'www.page.html':
                    res.writeHead(301,{'Location':'/'});
                    res.end();
                    break;
                default: 
                    //serve a 404 response
            }
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); //result: Server running on port 3500 // / GET

//add listener for the log event
/*
myEmitter.on('log', (msg) => logEvents(msg));


    myEmitter.emit('log', 'Log event emitted!');
*/