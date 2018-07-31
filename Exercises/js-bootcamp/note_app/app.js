const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better"
}, {
    title: "Office Modification",
    body: "Get a new seat"
}]


const filters = {
    searchText: ""
}

function renderNotes(notes, filters){
    const filteredNotes = notes.filter (function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector("#notes").innerHTML = ""
    
    filteredNotes.forEach((note) => {
        const noteEl = document.createElement("p");
        noteEl.textContent = note.title;
        document.querySelector("#notes").appendChild(noteEl)
    })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener("click", (e) => {
    e.target.textContent = "The button was clicked"
})

document.querySelector("#search-text").addEventListener("input", e => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector("#filter-by").addEventListener("change", e => {
    console.log(e.target.value);
    
})