/* The isArray() method returns true if an object is an array, otherwise false. */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);
console.log(result);//output: true

let text = "W3Schools";
let result2 = Array.isArray(text);
console.log(result2);//output: false