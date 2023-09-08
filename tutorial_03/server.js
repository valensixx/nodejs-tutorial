const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

//custom middleware logger
app.use(logger);



//built-in middleware to handle urlencoded data = form data:
//`content-type: application/x-www-form-urlencoded` 
app.use(express.urlencoded({extended: false}));

//built-in middlewere for json
app.use(express.json());

//serve ststic files; This is still middlewere
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/employees', require('./routes/api/employees'));//now we will focus no REST API


/*
//Route handlers 
app.get('/hello(.html)?', (req, res, next) => {
    console.log('attempted to load hello.html');
    next();
}, (req, res)=>{
    res.send('Hello World!');
});

//Chaining route handlers:
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished');
}

app.get('/chain(.html)?', [one, two, three]);
*/

//app use('/')
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





    
