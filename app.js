/*const logger = require('./logger');
//Always try to use asynchronous functions where possible


function sayHello(name){
    console.log('Hello '+name);
    logger.log('Sean');
}
sayHello('Sean');*/

//Operating system module - OS
var os = require('os');
var totalMem = os.totalmem();
console.log(`There is ${totalMem} on this machine`);

//File system - FS
var fs = require('fs');
var files = fs.readdirSync('./');
console.log('Synchronous -- ' +files);
fs.readdir('./', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log('ASynchronous -- ' +response);
    }
});


//Event emitter

var EventEmitter = require('events');
var emitter = new EventEmitter();
//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});
emitter.emit('messageLogged');