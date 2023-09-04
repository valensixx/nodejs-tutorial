const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

/*
rs.on('data',(dataChunk) => {
    ws.write(dataChunk);
})
*/

//result: we got new-lorem.txt file

//Second way of doing the task: 

rs.pipe(ws);