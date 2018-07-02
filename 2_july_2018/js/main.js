let a = document.querySelector('a');


console.log(a.constructor.name);    //HTMLAnchorElement

console.log(a.tagName); //A

let textArea = document.createElement('textarea');

// data-*
document.body.appendChild(textArea);

console.log(a.attributes);
let br = document.createElement('br')
document.body.insertBefore(br, textArea)

let atts = Array.from(a.attributes)

atts.forEach((attr) => {
    console.log(`${attr.nodeName} = ${attr.nodeValue}`)
})
textArea.setAttribute('rows', 10);
textArea.setAttribute('cols', 50)
textArea.style.resize = 'none'


console.log(textArea.getAttribute('style'));

// className, classList

console.log(a.className);

// a.className += ' a-style';
// console.log(a.classList.item(2))
// a.classList.add("a-style");
// console.log(a.classList.contains('a-style'));


a.dataset.count = 0;

a.addEventListener("click", (event) => {
    let count = parseInt(event.target.dataset.count);
    if (count < 4) {
        event.preventDefault()
        a.classList.toggle('a-style');
    }
    else {
        event.taget.dataset.count = count + 1;
    }
    a.classList.toggle("a-style");
})

textArea.removeAttribute('rows')

let input = document.querySelector("#name")
// input.value = '';
// console.log(input.value); 

let object = { name: "Oho Name", age: 80 };

// let {name, age} = object;
// name = 'name';
let { name: x, age: y } = object

// console.log(x, y);

let deepObject = {
    innerObject: {
        deep: "Deep Property", 
        wow: true
    }
};

let {innerObject: {deep, wow: myWow} } = deepObject;
// console.log(deep, myWow);

let num1 = 7, num2 = 13;
[num1, num2] = [num2, num1]

let key = 'name';

let {[key]:myName} = object;

function greet({age, name: greeting='person'}){
    console.log(`${greeting} is ${age} years old`);
    
}
greet({name:"John", age:22})
greet({age:22})

function getCoords(){
    return {
        ab: 43,
        bc: 41,
    }
}

let {ab, bc} = getCoords();
console.log(ab, bc);
