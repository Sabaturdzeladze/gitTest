let upperCase = require('upper-case');
const OS = require('os')

const dateFormatter = require('./date_formatter')

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log(upperCase('asoncasrkosakce'));


// console.log('Platform ' + OS.platform);
// console.log(`Architecture - ${OS.arch}`);
// console.log(`CPUs - ${OS.cpus().length}`);

let current = new Date();

console.log(`Current date - ${dateFormatter.formatDate(current, '/')}`);
console.log(`Current time - ${dateFormatter.formatTime(current, ':')}`);