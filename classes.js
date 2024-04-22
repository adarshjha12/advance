// making a method that encrypt passwords with classs

class user {
    constructor (title, password){
        this.title = title
        this.password = password
    }


encryptPassword(){
   return `${this.password}abcd`
}
}

let anand = new user('jha', 123)
console.log(anand.encryptPassword());

// making a method that change lowercase letter into uppercase with classs

class user1 {
    constructor (title, password){
        this.title = title
        this.password = password
    }


changeCaseToUpper(){
   return `${this.title.toUpperCase()}`
}
}

let adarsh = new user1('abhishek', 123)
console.log(adarsh.changeCaseToUpper());




// inheritance with classsss

