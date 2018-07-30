fetch('https://jsonplaceholder.typicode.com/posts/1')
.then( response => response.json() )
.then( json => console.log(json) )
.catch( err => console.log(err) );
//      ===
async function getJSON() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let json = await response.json()
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}
async function getJSON2() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json()
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}


getJSON();

/* Async function syntaxes */

// Anonymous async function

let func = (async function() {
    //code
}) ()

// Async func declaration
async function myAsync (){
    // code
}

// Async function assignement
let myAsyncFunc = async function(){
    // code
}

let asyncArrowFunc = async () => {
    // code
}

// addEventListener('click', async function (event) {
    
// })

let myObject = {
    async method() {
        //code
    }
}

class MyClass {
    async method() {
        // code
    }
}
async function funcPromiseAll(){
    let [first, second] = await Promise.all([getJSON(), getJSON2()])
    console.log(first);
    console.log(second);
}
funcPromiseAll()