function Car(){
    this.setName = function(name){
        this.name = name;
    }
    this.setColor = function(color){
        this.color = color;
    }
    this.setBrand = function(brand){
        this.brand = brand;
    }
    this.save = function(){
        alert(`saving ${this.name}, color - ${this.color}, brand - ${this.brand}...`);
    }
}

let car1 = new Car();
car1.setName('Jetta');
car1.setColor('Platinum Gray Metallic');
car1.setBrand('VW');
car1.save();