
//check for existing saved data
function getSavedNotes(){
    const notesJSON = localStorage.getItem("notes");
    
    if(notesJSON !== null) {
        return JSON.parse(notesJSON);
    }else {
        return [];
    }
}

// generate the DOM structure for a note
function generateNoteDom(note) {
    const noteEl = document.createElement("div");
    const textEl = document.createElement("span");
    const button = document.createElement("button")

    // Setup the remove note button
    button.textContent = "X";
    noteEl.appendChild(button);

    // Setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title;
    }else {
        textEl.textContent = "Unnamed note"
    }
    noteEl.appendChild(textEl);
    return noteEl;
}

// render application notes
function renderNotes(notes, filters){
    const filteredNotes = notes.filter (function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector("#notes").innerHTML = "";
    
    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDom(note)
        document.querySelector("#notes").appendChild(noteEl);
    })
}
