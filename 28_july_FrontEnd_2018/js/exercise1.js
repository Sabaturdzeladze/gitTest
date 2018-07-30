let day = document.querySelector("#day");
let year = document.querySelector("#year");
let month = document.querySelector("#month");
let city = document.querySelector("#city");
let about = document.querySelector("#about");

let button = document.querySelector("button")
button.addEventListener( "click", function(){
    let div = document.createElement("div")
    div.textContent = `Loading  `
    div.style.backgroundColor = 'red';
    div.setAttribute("id", "delete")
    document.body.appendChild(div)
    let promise1 = new Promise( function(resolve, reject) {
        setTimeout(() => {
            resolve(`We made it`)
        }, 2000);
    } );

    promise1.then( (result) => {
        let div = document.querySelector("div")
        document.body.removeChild(div)
        let img = document.createElement(`img`)
        document.body.appendChild(img)
        img.setAttribute(`src`, `http://qnimate.com/wp-content/uploads/2014/03/images2.jpg`);
        append(day)
        append(year)
        append(month)
        append(city)
        append(about)
        console.log(result);
    })
})


function append(element) {
    let createElem = document.createElement(`div`);
    createElem.textContent = element.value;
    document.body.appendChild(createElem);
}
