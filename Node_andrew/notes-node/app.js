console.log(`Starting app.`);

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

let command = process.argv[2];

console.log(`Command: ${command}`);
if (command === 'add'){
    console.log(`Adding new Note`);
} else if (command === 'list'){
    console.log(`Listing All Notes`);
} else if (command === 'read'){
    console.log(`Reading The Note`);
} else if (command === 'remove'){
    console.log(`Removing Note`);
} else {
    console.log(`Command not recognized`);
}