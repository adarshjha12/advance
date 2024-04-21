// function multiplyFive (num){

//    return num * 5
// }
// console.log(multiplyFive(6));

// multiplyFive.power = 2
// console.log(multiplyFive.power);
// console.log(multiplyFive.prototype);


// function user(name, price) {
//     this.name = name
//     this.price = price
// }
 
// user.prototype.newFunc = function (){
//    return this.price++
// }
// user.prototype.print = function (){
//    return `price is ${this.price}`;
// }

// let adarsh = new user('tea', 22)
// let abdvilliers =new user('samosa', 550)
// console.log(adarsh.newFunc())
// console.log(adarsh.print())


let anyObj = {
    username: 'adarsh',
    password: 45446454
}

let anyArray = ['ajha', 'hey', 'how', 'are', 'you']

Array.prototype.anyFun = function(){

   return 'how are you';
}

// console.log(anyObj.anyFun());
// console.log(anyArray.anyFun());

//inheritance
//accessing properties from one object to another object

let obj = {
    name: "adarsh",
    age: 22
}

let obj2 = {
    class: '12th',
    dob: 2002,
}

Object.setPrototypeOf(obj, obj2)
// console.log(obj.class);

// lets make our own method with the help of prototype
// we make method that will show truelength of the strings

// let str = 'adarsh      '

// String.prototype.methoddd = function(){
//     return `true length is ${this.trim().length}`
// }

// console.log(str.methoddd());


// prototypal inheritance

// Parent constructor function
function Animal(name) {
    this.name = name;
}

// Adding a method to the parent's prototype
Animal.prototype.sayName = function() {
    console.log('My name is ' + this.name);
};

// Child constructor function
function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
}

// Inherit from Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a method specific to Dog
Dog.prototype.bark = function() {
    console.log('Woof!');
};

// Creating instances
var myDog = new Dog('Buddy', 'Labrador');
myDog.sayName(); // Output: My name is Buddy
myDog.bark();    // Output: Woof!
