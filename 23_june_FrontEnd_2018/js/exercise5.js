function Accumulator(startingValue){
    this.startingValue = startingValue;
    let value = 0;
    // let number = 0;
    this.read = function (value = Number(prompt("Enter a value"))){
        this.startingValue += value;
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.startingValue);