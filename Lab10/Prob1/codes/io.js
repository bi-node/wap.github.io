const fs = require('fs');
fs.readFile('hello.txt', () => console.log('this is readFile 1'));
new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));