// String.prototype.show = function(){
//     console.log(this);

// }
// String.prototype.repeat = function(n){
//     return new Array(n+1).join(this);

// }
// "Hello World".show()

// console.log("rame".repeat(4));


// Classes
function User(name, birthday) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name, ` Age : ${something()}`);
    }
    function something() {
        return new Date().getFullYear() - birthday.getFullYear();
    }
}

let gela = new User("Gela", new Date(1990, 2, 5))
// gela.sayName()


// Factory Class Pattern

function Person(name, birthday) {
    function calcAge() {
        return new Date().getFullYear() - birthday.getFullYear();
    }

    return {
        sayName() {
            console.log(name, ` Age : ${calcAge()}`);

        }
    }
}

// let gela2 = Person("gela2", new Date(1990, 2, 5))
// gela2.sayName()

function Human(name, birthday) {
    this._name = name;
    this._birthday = birthday;

}

Human.prototype._calcAge = function (){
    return new Date().getFullYear() - this._birthday.getFullYear();
}

Human.prototype.sayName = function(){
    console.log(this._name, ` Age : ${this._calcAge()}`);

}

// let human = new Human("John", new Date(1997, 4, 9))
// human.sayName()


class Animal {
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length === 0){
            console.log("Name Error!");
            return;
        }
        this._name = value;
    }
    sayName(){
        console.log(this.name.repeat(3));
    }
    static staticMethod(){
        console.log(this == Animal);
        
    }
}

// let cat = new Animal("Tom");
// cat.sayName()

function makeClass(sentence){
    return class {
        say(){
            console.log(sentence);
        }
    }
}
// let sentence = makeClass("lorem rame rume.")
// new sentence().say()

// Animal.staticMethod()


// class Article{
//     constructor(title, date){
//         this.title = title;
//         this.date = date;
//     }
//     static compare (articleA, articleB){
//         return articleA.date - articleB.date;
//     }
// }
// let articles = [
//     new Article("Html", new Date(2018, 6, 23)),
//     new Article("Css", new Date(2018, 5, 5)),
//     new Article("ES6", new Date(2018, 4, 25)),
// ];

// articles.sort(Article.compare)
// console.log(articles[0].title);


class Product{
    constructor(id, name, price){
        this._id = id;
        this.name = name;
        this.price = price;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    set name(value){
        return this._name = value;
    }
    get price(){
        if(this._price >= 0){
            return this._price;
        }
        return undefined;
    }
    set price(value){
        return this._price = value;
    }

    makeDiscount(discount){
        this._price -= discount;
        return this._price;
    }
    printing(){
        return `id: ${this.id}, price: ${this.price}, name: ${this.name}`;
    }
    static compare(prod1, prod2){
        return prod1._price - prod2._price;
    }
}

// let prod1 = new Product('rame', 10)
// let prod2 = new Product('rame', 16)
// let prod3 = new Product('rame', 4)

let products = [
    new Product(1565, 'rame', 10), new Product(45649, 'rame', 16), new Product(61561,'rame', 4)
]

products.sort(Product.compare)
let li = Array.from(document.querySelectorAll(".prod"));

for(let i = 0; i < li.length; i++){
    li[i].textContent = products[i].printing();
}
