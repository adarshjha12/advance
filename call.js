//calling another function by using call method

function animal (dogname){

    this.dogname = dogname
}

function dog(dogname, breed, city) {

    animal.call(this, dogname)
    this.breed = breed
    this.city = city
}

let petName = new dog("tommy", "germanShepherd", "india")
console.log(petName);