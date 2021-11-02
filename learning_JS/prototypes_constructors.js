function Dog(name, age) {
    this.name = name;
    this.age = age;
}

let Barley = new Dog("Barley", 2);

Dog.prototype.introduce = function(){
    console.log("My name is " + this.name);
}
let Willow = new Dog("Willow", 1);

console.log(Barley);
Barley.introduce();
console.log(Willow);
Willow.introduce();