const express = require('express');
const router =  express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res)=>{ // '^/$|/index.html' this says start with / and end with / or /index.html we made .index optional
     res.sendFile(path.join(__dirname, '..' ,'views', 'subdir', 'index.html')); 
 });

 router.get('/test(.html)?', (req, res)=>{ // '^/$|/index.html' this says start with / and end with / or /index.html we made .index optional
    res.sendFile(path.join(__dirname, '..' ,'views', 'subdir', 'test.html')); 
});

module.exports = router;