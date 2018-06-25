/* let car = {
    make: "bmw",
    model: "745li",
    year: 2010,
    getPrice: function(){
        return 5000;
    },
    printDescription: function(){
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription(); */

/* let myObject = { value: 'My object'};

function third () {
    return this.value;
}

console.log(third.call(myObject)); */

/* function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}
let customer2 = {
    firstName: 'richard',
    lastName: 'hoffmann',
    print: fifth
}

customer1.print();
customer2.print(); */

function clickHandler(arg){
    console.log(arg);
    console.log(arg.innerText);
    
    // console.log(this);
}