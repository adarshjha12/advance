class user {
    constructor (username) {
        this.username = username
    }

    // if you use static keyword here before the method, you can't use this method further in new instances created by it.

   static logme(){
        console.log(`hello brother`);
    }
}

class user2 extends user{
    constructor (username,email){
        super(username)
        this.email = email
    }
}

let adarsh = new user2('adarsh', 'gmail.com')
let anand = new user('adarsh', 'gmail.com')

// adarsh.logme()
// anand.logme()

// this code will throw error because of static keyword

// you can use static keyword when you want that the method you created in a class
// you want this method to be use within the class. any instances created by this class can't access the method.

// you can use it like this

class newUser {

   static logme() {
        console.log(`hello brother`);
    }
}
newUser.logme()

// another example

class calculate{
    static adding(a, b){

        return a + b
    }
}

console.log(calculate.adding(3, 6))