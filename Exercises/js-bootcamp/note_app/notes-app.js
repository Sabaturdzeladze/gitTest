const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })

    saveNotes(notes)
    location.assign(`../note_app/edit.html#${id}`)


})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})



// -------- Moment ----------

// const now = moment()
// now.add(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'));
// console.log(now.fromNow());

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString());

// const birthday = moment();
// birthday.year(1997).month(11).date(7);
// console.log(birthday.format('MMM D, YYYY'));



// ------------- Dates ---------------

// Unix Epoch - January 1st 1970 00:00:00
// const now = new Date()
// const timestamp = now.getTime();

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of Month: ${now.getDate()}`);
// console.log(`Day of Week: ${now.getDay()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

// const past = new Date('Feb 22 1990');
// const past2 = new Date('Dec 7 1997');

// const time1 = past.getTime()
// const time2 = past2.getTime()

// if (time1 < time2){
//     console.log(past.toString());
// }
// else{
//     console.log(past2.toString());
// }