const Person = function (firstName, lastName, age,  likes = []){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}`
    })

    return bio;
}
Person.prototype.setName = function(fullName){
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
}

const me = new Person('Saba', 'Turdzeladze', 20, ['Technology', 'Biking']);
me.setName('Nukri Djorkaeff')
console.log(me.getBio());

const person2 = new Person('Clancey', 'Turner', 25);
console.log(person2.getBio());
