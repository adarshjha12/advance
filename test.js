// // function greet(name) {
// //     return `Hello, ${name}! My name is ${this.name}.`;
// // }

// // const person = { name: 'John' };

// // // Using call to invoke greet function with person as 'this'
// // console.log(greet.call(person, 'Alice')); // Output: Hello, Alice! My name is John.



// // function greet1 (name){
// //     return `Hello, ${name}! My name is ${this.name}.`;

// // }

// // const person1 = { name: 'John' };
// // let anYarray = ['adarsh']
// // console.log(greet1.apply(person, anYarray));




// // function greet(name) {
// //     return `Hello, ${name}! My name is ${this.name}.`;
// // }

// // const person2 = { name: 'John' };

// // // Using bind to create a new function with person as 'this'
// // const greetJohn = greet.bind(person);

// // console.log(greetJohn('Alice')); // Output: Hello, Alice! My name is John.

// const sentence = 'I love JavaScript JavaScript is awesome';
// const wordMap = new Map();

// sentence.split(' ').forEach(word => {
//     if (wordMap.has(word)) {
//         wordMap.set(word, wordMap.get(word) + 1);
//     } else {
//         wordMap.set(word, 1);
//     }
// });

// // console.log(wordMap);



// Object.getOwnPropertyDescriptor(Math, 'pi')

function outerFunction() {
    const outerVariable = 'I am from the outer function';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const innerFunc = outerFunction();

innerFunc(); 
