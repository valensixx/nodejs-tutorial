//NodeJs is dofferent from Vanilla JS, because it runs on a server - not in a browser(backend not frontend)
//The console is the terminal window in our case it is vsCode's terminal.

//if we type 'node' in the terminal it will start -> 
//PS C:\Users\valen\Desktop\nodejs> node
//Welcome to Node.js v18.15.0. 

//It can five us result like 2+2 -> 4 

//To exite we press ctrl + c 2 or more times:
//(To exit, press Ctrl+C again or Ctrl+D or type .exit)
//>
//PS C:\Users\valen\Desktop\nodejs> 

console.log('Hello World');
//cd C:\Users\valen\Desktop\nodejs\tutorial_01 node server
// --> result: Hello World

//There is global object isnted of window object in NodeJS
//console.log(global);
//node server ---> now we can see this global Object:

/*<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 38.769400000572205,
      nodeStart: 2.89819997549057,
      v8Start: 6.252900004386902,
      bootstrapComplete: 27.861299991607666,
      environment: 15.081399977207184,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1693742792860.808
  },
  fetch: [AsyncFunction: fetch]
}*/

//There are common Core Modules that we can explore, so we use CommonJS modules insted of ES6 modules

const os = require('os');
const path = require('path');

console.log(os.type());
console.log(os.version());
console.log(os.homedir()); //home directory 

/*result
PS C:\Users\valen\Desktop\nodejs\tutorial_01> node server
Hello World
Windows_NT
Windows 10 Pro
C:\Users\valen
*/

console.log(__dirname);
console.log(__filename);

/*result:
C:\Users\valen\Desktop\nodejs\tutorial_01
C:\Users\valen\Desktop\nodejs\tutorial_01\server.js
*/