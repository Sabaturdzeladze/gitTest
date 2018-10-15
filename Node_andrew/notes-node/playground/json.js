const fs = require('fs');

let originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

let originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString)
console.log(note.title);