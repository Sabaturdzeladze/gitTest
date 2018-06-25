function Car(){
    this.setName = function(name){
        this.name = name;
        return this;
    }
    this.setColor = function(color){
        this.color = color;
        return this;
    }
    this.setBrand = function(brand){
        this.brand = brand;
        return this;
    }
    this.save = function(){
        alert(`saving ${this.name}, color - ${this.color}, brand - ${this.brand}...`);
    }
}

let car1 = new Car().setName('Jetta').setColor('Platinum Gray Metallic').setBrand('VW').save();
console.log(car1);
