/* 
Spread operator copies an array without keeping reference and pushes value into the new array.
*/

//01. spread operator copies an array without keeping any reference.
const numbers = [78, 87, 92, 41];
const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers);
/* 
output: 
[
  78, 87, 92, 41,
  99, 99, 99
]
*/
console.log(newNumbers);
//output: [ 78, 87, 92, 41 ]

//02. copy an array without reference and push new value
const numbers2 = [78, 87, 92, 41]
const pushValue = [11, ... numbers2, 97];
console.log(pushValue);
//output: [ 11, 78, 87, 92, 41, 97 ]
pushValue.push(77);
console.log(pushValue);
/* 
output: 
[
  11, 78, 87, 92,
  41, 97, 77
]
*/
console.log(numbers2);
//output: [ 78, 87, 92, 41 ]
