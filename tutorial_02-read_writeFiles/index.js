const fs = require('fs');

fs.readFile('./files/starter.txt', (err, data) =>{
    if(err) throw err;
    console.log(data);
})

//here we start with comand in termonal ==> node index:
/*
    result  
PS C:\Users\valen\Desktop\nodejs\tutorial_02-read_writeFiles> node index
<Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
*/