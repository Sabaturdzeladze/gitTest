let animal = {
    eats: true,
}

function Dog(name) {
    this.name = name;
}


// let jeka = new Dog("White Jeka"); ak ar gaachnia prototype

Dog.prototype = animal;

let jeka = new Dog("White Jeka");
console.log(jeka.eats);  //true, radgan mis prototypes akvs eats: true.

// jeka.__proto__.eats   mshoblis propertys shecvlis, shesabamisad shvilisac sheicvleba
// jeka.prototype.eats      mxolod shvilis property sheicvleba.


// console.log(jeka.constructor === Dog);

// Obiektis shekmnis xerxebi

let newObject = {};
let newObject1 = Object.create(Object.prototype);
let newObject2 = new Object();

// obiektis propertys gansazgvra
newObject.someKey = "Hello World";
console.log(newObject.someKey);

newObject1["someKey"] = "Hello World 2"
console.log(newObject1.someKey);

Object.defineProperty(newObject2, 'someKey', {
    value: "someKey",
    writable: true,
    configurable: true,
    enumerable: true
});
console.log(newObject2.someKey);

function defineProp(obj, key, value) {
    let config = {
        value,
        writable: true,
        configurable: true,
        enumerable: true,
    }

    Object.defineProperty(obj, key, config);
}

let person = Object.create(Object.prototype);

defineProp(person, "car", "supercar");
defineProp(person, "dateOfBirth", "14 sep");
defineProp(person, "hasBeard", true);

// Object.defineProperty(person, {
//     'key1': {
//         value: "key",
//         writable: true,
//         configurable: true,
//         enumerable: true,
//     },
//     'key2': {
//         value: "key2",
//         writable: true,
//         configurable: true,
//         enumerable: true,
//     }
// })

// console.log(person);

let driver = Object.create(person)

defineProp(driver, "topSpeed", "170mph")
// console.log(driver);

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    // this.toString = function(){
    //     return `${this.model} has gone ${this.miles} miles`;
    // }
}

Car.prototype.toString = function () {
    return `${this.model} has gone ${this.miles} miles`;
}

let civic = new Car("Honda Civic", 2017, 24521)
let prius = new Car("toyota prius", 2018, 1521)

// console.log(civic.toString())
// console.log(prius.toString())

function to(func, limit) {
    let count = 0;
    return function () {
        if (count < limit) {
            count++
            return func();
        }
        return undefined;
    }

}

function generator() {
    return Math.floor(Math.random() * 100) + 1;
    // return to(generator, 5);
}
// debugger
let steps = to(generator, 3);
console.log(steps());
console.log(steps());
console.log(steps());
console.log(steps());


