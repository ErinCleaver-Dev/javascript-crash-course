/* functions in javascript 
1.  Create a function 
2.  Call the function
*/

function fun() {
    console.log('This is an function');
}


// takes in a name and returns hello, followed by your name
let name = prompt('What i your name?')
const greeting = (name) => {
    let result = `Hello ${name}`
    console.log(result)
}


fun();

// greeting()
const sumNumbers = (num1, num2) => {
    return num1 + num2;
}

console.log(sumNumbers(4, 5))

greeting(name);