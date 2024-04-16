function multiplyFive (num){

   return num * 5
}
console.log(multiplyFive(6));

multiplyFive.power = 2
console.log(multiplyFive.power);
console.log(multiplyFive.prototype);


function user(name, price) {
    this.name = name
    this.price = price
}
 
user.prototype.newFunc = function (){
    this.price++
    // return this.price'
}
user.prototype.print = function (){
    console.log(`price is ${this.price}`);
}

let adarsh = new user('tea', 22)
let abdvilliers = user('samosa', 550)

// console.log(adarsh);
// adarsh.newFunc()

console.log(adarsh.print());