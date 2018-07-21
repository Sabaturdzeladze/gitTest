// console.log(wow);
// console.log(window.wow);

let myWow = document.getElementById("wow");
wow.style.padding = '20px';
wow.style.backgroundColor = "red";
wow.style.marginBottom = "10px";
// console.log(wow);


let ps = document.getElementsByName("p");
// console.log(ps)

for (let key of ps.entries()){
    // console.log(key);
};

let elements = document.querySelectorAll("ul li:last-child");
// console.log(elements);
elements.forEach( (el) => {
    el.style.backgroundColor = 'red';
} )

// console.log(username.value);
username.addEventListener("input", ({target}) => {
    // result.textContent = target.value;
    console.log(target.dataset.change);
    let toChange = document.querySelector(`#${target.dataset.change}`)
    toChange.textContent = target.value
    
});

document.body.info = {
    name: "Body Info",
    title: "HTML",
};

Element.prototype.whoAmI = function (){
    console.log(`I am ${this.tagName.toLowerCase()}`);
}
document.body.whoAmI();

// elements.hasAttribute(name)
// elements.getAttribute(name)
// elements.setAttribute(name)
// elements.removeAttribute(name)

// myWow.setAttribute("class", "wow_class")
// console.log(wow);

