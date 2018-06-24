let operation = {
    "+": (a,b) => a+b,
    "-": (a,b) => a-b,
}

function Calculator(){
    this.calculate = function(str){
        this.str = str;
        let arr = this.str.split(" ");  // splits user's operation

        let a = Number(arr[0]);     // storing "number" members of an array in the variables
        let b = Number(arr[2]);
        
        for (let item in operation){        //iterating through global object 
            if (arr[1] == item){            // comparing the user's operation to objects key
                return operation[item](a,b);    // returning the function that is written in the value of objects key.
            }
        }
    }
    this.addOperator = function (name, func){
        operation[name] = func;             // adding the new operation to the "operation" object
    }
}

let obj = new Calculator();

alert(obj.calculate(prompt("Enter")));
obj.addOperator("*", (a,b) => a * b);
obj.addOperator("/", (a,b) => a / b);
obj.addOperator("**", (a,b) => a ** b);

let result = obj.calculate("5 ** 2");  
alert(result)   // output is 25
