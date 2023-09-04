const fs = require('fs');
const path = require('path'); //we will use 'path' incase of diierent usage of slashes in a path ridectories -->  .\name  .|name

//fs.readFile('./files/starter.txt', (err, data) =>{
   // if(err) throw err;
    //console.log(data.toString());
//})

//here we start with comand in termonal ==> node index:
/*
    result  using ---> console.log(data());
PS C:\Users\valen\Desktop\nodejs\tutorial_02-read_writeFiles> node index
<Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
*/

//if we use  console.log(data.toString()); This read the data:
/*
    result: Hello, World!
*/
/*
fs.readFile('./files/starter.txt', 'utf8' ,(err, data) => {
    if(err) throw err;
    console.log(data.toString());
})
console.log('Hello...');
*/
// result: Hello, World! if using without console log 'Hello..'
//Result Using with 'Hello...' --> This is like Async - example:
//Hello...
//Hello, World!

//fs.readFile('./files/hello.txt', 'utf8' ,(err, data) => {
    //if(err) throw err;
   // console.log(data.toString());
//})



//Now we exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was un uncaught error: ${err}`);
    process.exit(1);
})
/*Result if use './files/hello.txt'
PS C:\Users\valen\Desktop\nodejs\tutorial_02-read_writeFiles> node index    
There was un uncaught error: Error: ENOENT: no such file or directory, open 
'C:\Users\valen\Desktop\nodejs\tutorial_02-read_writeFiles\files\hello.txt' 
PS C:\Users\valen\Desktop\nodejs\tutorial_02-read_writeFiles>
*/


//Now we do the example using 'path': 
//we are using __dirname(directory name), 
//'files'(files directiry), 
//'starter.text'(name of the file we want to use)
 // Now we will write data:
 fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you!', (err) => {
    if (err) throw err;
    console.log('Write task done!');

    // now it will create and update the file reply.txt
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n.Yes it is!', (err) => {
        if (err) throw err;
        console.log('Append task done!');

        // here we will rename the file
        fs.rename(
            path.join(__dirname, 'files', 'reply.txt'),
            path.join(__dirname, 'files', 'newReply.txt'),
            (err) => {
                if (err) throw err;
                console.log('Rename task done!');
            }
        );
    });
});

//result: Write task done! and reply.txt file is created 
//and in the file there is our text: 'Nice to meet you!'
//now we got the updated version: added 'Yes it is!'



//Now we will update the file using append, append can also create new file, if not exist
//fs.appendFile(path.join(__dirname, 'files', 'test.txt' ), 'Testing the test.txt',(err) => {
    //if(err) throw err;
    //console.log('Append task done!');
//})  
//result:  'Append task done!' and the file test.txt is done with text in it: 'Testing the test'