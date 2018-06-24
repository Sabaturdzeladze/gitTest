let calculator = {
    read(){
        this.num1 = Number(prompt("enter first number"));
        this.num2 = Number(prompt("enter second number"));
    },
    sum(){
        return(this.num1 + this.num2);
    },
    mul(){
        return(this.num1 * this.num2);
    }
}

function Calculator (num1, num2){
    this.num1 = num1;
    this.num2 = num2;

    this.sum = function (){
        return this.num1 + this.num2;
    }

    this.mul = function (){
        return this.num1 * this.num2;
    }
}

let obj1 = new Calculator(Number(prompt("enter first number")), Number(prompt("enter second number")));

alert(obj1.sum());
alert(obj1.mul());