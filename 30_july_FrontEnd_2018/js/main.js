const container = document.querySelector(".container");
const contentBox = document.querySelector(".content__box");
const pElement = document.querySelector('p');

// container.addEventListener("click", function (event) {
//     console.log("container box");
// }, false);

// contentBox.addEventListener("click", function (event) {
//     console.log("content box");
// }, false);

// pElement.addEventListener("click", function (event) {
//     console.log("p tag");
//     // event.stopPropagation();
//     event.stopImmediatePropagation();
// }, false);

// pElement.addEventListener("click", function (event) {
//     console.log("p tag 2");
// }, false); 

// const myEvent = document.createEvent("CustomEvent");

// pElement.addEventListener('myCustomEvent', function(event) {
//     console.log(event.detail);
// })
// contentBox.addEventListener('myCustomEvent', function(event) {
//     console.log(event.detail);  // given objects details...
// })

// const myCustomEventData = {
//     name: "myCustomEvent",
//     id: 2018,
// }

// myEvent.initCustomEvent('myCustomEvent', true, false, myCustomEventData);

// pElement.dispatchEvent(myEvent);
const table = document.querySelector("table")
table.addEventListener('click', ({target}) => {
    if ( target.tagName.toLowerCase() == "td" ){
        console.log(target.textContent);
    }
})


