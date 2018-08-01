const notes = getSavedNotes()

const filters = {
    searchText: ""
}

// localStorage.setItem("location", "Philadelphia");

// console.log(localStorage.getItem("location"));  // phila

// localStorage.removeItem("location");
// console.log(localStorage.getItem("location"));  // null

// localStorage.clear()


// const user = {
//     name: "Andrew",
//     age: 27,
// }

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);

// const userJSON = localStorage.getItem("user")
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);


renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener("click", (e) => {
    notes.push({
        // id: uuidv4(),
        title: '',
        body: '',
    })    
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes(notes, filters)
})

document.querySelector("#search-text").addEventListener("input", e => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector("#filter-by").addEventListener("change", e => {
    console.log(e.target.value);
    
})