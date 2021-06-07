// Data type Strings

let fruit = 'banana';

// new line character is \n
let moreFruits = 'banana\napple'; 
console.log(moreFruits)

// get the length of the string
console.log(fruit.length)

// to get an index 
console.log(fruit.indexOf("an"))
console.log(fruit.indexOf("q"))
// slicing
console.log(fruit.slice(2, 4))
// to replace 
console.log(fruit.replace('ban', '123'))
// to make uppercase
console.log(fruit.toUpperCase())
// to make lowercase
console.log(fruit.toLowerCase())
// to get a char
console.log(fruit.charAt(2))
// to get a char
console.log(fruit[2])

console.log(fruit.split(''))//split by character

let list = 'apple , banana, orange, blackberry';
console.log(list.split(', ')) // split by commona
