class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);

    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped.`);
    }
    static compare(a, b) {
        return a.speed - b.speed;
    }
}

class Mouse extends Animal {
    // constructor(name, earLength) {
    //     super(name);
    //     this.earLength = earLength;
    // }
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        super.stop();
        this.hide()
    }
}

let jerry = new Mouse("Jerry", 3);
jerry.run(120);
// jerry.hide();
jerry.stop();
console.log(jerry.earLength);
let mice = [
    new Mouse("Big Rat", 5),
    new Mouse("BatMan", 3),
    new Mouse("Jerry", 4),
]
// mice.sort(Animal.compare)   
// mice[0].run()

class MyArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

// let myArray = new MyArray(1,2,3,4,5,6,7,8, 9,10,20,30,40)
// console.log(`myArray.isEmpty() - ${myArray.isEmpty()}`);
// let filteredArr = myArray.filter( item => item >= 10);
// console.table(filteredArr)
// console.log(`filteredArr.isEmpty() - ${filteredArr.isEmpty()}`);

// console.log(jerry instanceof Animal);
// console.log(jerry instanceof Mouse);
// console.log(MyArray instanceof Array);

class Product {
    constructor(id, name, price) {
        this._id = id;
        this.name = name;
        this.price = price;
        
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        return this._name = value;
    }
    get price() {
        if (this._price >= 0) {
            return this._price;
        }
        return undefined;
    }
    set price(value) {
        return this._price = value;
    }

    makeDiscount(discount) {
        this._price -= discount;
        return this._price;
    }
    printing() {
        return `id: ${this.id}, price: ${this.price}, name: ${this.name}`;
    }
    static compare(prod1, prod2) {
        return prod1._price - prod2._price;
    }
}

class Book extends Product {
    constructor(id, name, price, authors, pubDate) {
        super(id, name, price);
        this.authors = authors;
        this.pubDate = pubDate;
    }
    printing() {
        return `${super.printing()} author: ${this.authors}, publication date: ${this.pubDate}`;
    }
}

let book1 = new Book(12312, "rame", 20, "jigari", 1990)
let book2 = new Book(12312, "rame", 20, "jigari1", 1992)
let book3 = new Book(12312, "rame", 20, "jigari2", 1994)
let arr = [book1, book2, book3]
arr.forEach(function (el) {
    console.log(el.printing());

})