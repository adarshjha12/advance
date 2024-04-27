class user{
    constructor(password, email){
        this.password = password
        this.email = email

    }

    get email(){
       return this._email.toUpperCase()
    }

    set email(value){

        this._email = value.toLowerCase()
    }


}

let user1 = new user('18283376', '@gmail.com')
console.log(user1.email);

// getter and setter used to set element and when we want to access the element we can change the value .

// in other words we can set something else, and we can get something else.