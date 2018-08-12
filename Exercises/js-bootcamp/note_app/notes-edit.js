const noteId = location.hash.substring(1);
let notes = getSavedNotes();
const title = document.querySelector('#note-title');
const body = document.querySelector('#note-body');
let note = notes.find(function (note) {
    return note.id === noteId;
})

if (note === undefined) {
    location.assign('../note_app/index.html')
}

title.value = note.title;
body.value = note.body;

title.addEventListener('input', (e) => {
    note.title = e.target.value;
    saveNotes(notes)
})

body.addEventListener('input', (e) => {
    note.body = e.target.value;
    saveNotes(notes)
})

const remove = document.querySelector('#remove-note')
remove.addEventListener('click', (e) => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('../note_app/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId;
        })

        if (note === undefined) {
            location.assign('../note_app/index.html')
        }

        title.value = note.title;
        body.value = note.body;
    }
})