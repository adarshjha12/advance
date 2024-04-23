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


class user3 {
    constructor(username, email){
        this.username = username
        this.email = email
    }

    loginMessage(){
        console.log(`${this.username} has logged in, his email is ${this.email}`);
    }
}

class user4 extends user3 {
    constructor (password, username, email){

        super(username, email)
        this.password = password
       
    }

    logOutMessage(){
        console.log(`${this.username} has just logged out`);
    }
}

let newUser = new user4('15226asf', 'jha kumar', '@gmail.com')
// console.log(newUser);
// newUser.logOutMessage()
newUser.loginMessage()

let nextuser = new user3 ('hitesh', 'g.com')
nextuser.loginMessage()

