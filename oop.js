let obj = {
    user: 'adarsh',
    password: 1234443,
    fun: function name() {
        console.log(`username is ${this.user}`);
    }
}

// console.log(obj);

function user(username, password, id) {
    this.username = username
    this.password = password
    this.id = id
    return this
}


let user2 = new user('adarsh', 27887585258, 11)
let user3 = new user('hhhhhh', 27887585258, 11)
 
console.log(user2 instanceof user);
// console.log(user3);
