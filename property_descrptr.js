let holder = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(holder);

let obj = {
    name: 'adarsh',
    class: 10,
    pass: true,
    visa: false
}
Object.defineProperty(obj, 'name',{
    enumerable: false,
    writable: false,
    configurable: false
})

// using above properties we can control that which property of an object we want to use but not want to iterate, or want to hide.

for (const [key, value] of Object.entries(obj)) {

    console.log(key, value);
}

let obj2 = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(obj2);