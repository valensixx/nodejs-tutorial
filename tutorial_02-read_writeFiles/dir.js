const fs = require('fs');

if(!fs.existsSync('./new')){ //we are checking to see if directory(folder) does not exists!
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created!')
    }); //this will create new falder named 'new' and give message 'Directory created!' in the console
} 

//now we will give instructions to delete directory if it exists

if(fs.existsSync('./new')){ //we are checking to see if directory(folder) does not exists!
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed/deleted!')
    }); 
} // result: directory removed/deleted from filetree and we got message in the console 'Directory removed/deleted!'
