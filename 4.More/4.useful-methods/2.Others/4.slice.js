/* 
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
*/
//Examples:
//01
let anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';
let slice = anthem.slice(5, 10);//(x,y)=>x:starting point: (x-1), y:ending point
console.log(slice);//output: Sonar

//02
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);//output: //[ 'Orange', 'Lemon' ]

//03

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]


//Negative Value Slice
//01
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
/* 
process: 
["Banana", "Orange", "Lemon"[-3], "Apple"[-2], "Mango"[-1]];
So, starting point is -3
Total value = -3-(-1) = -2(total value 2 in minus direction)
*/
const myBest = fruits.slice(-3, -1);
console.log(myBest);//output: [ 'Lemon', 'Apple' ]

//02
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
/* 
process: 
["Banana"[-5], "Orange"[-4], "Lemon"[-3], "Apple"[-2], "Mango"[-1]]
Starting point = -3
Total value: -3-(-2) = -1(total value 1 in minus direction)
*/
const myBest2 = fruits.slice(-3, -2);
console.log(myBest2);//output: //[ 'Lemon' ]

//03
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
/* 
process: ["Banana", "Orange", "Lemon"[-3], "Apple"[-2], "Mango"[-1]]
Starting Point: -3
Tota; Value = -3 -(-3) = 0
So empty array
*/
const myBest3 = fruits.slice(-3, -3);
console.log(myBest3);//output: []

//04
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"] 
