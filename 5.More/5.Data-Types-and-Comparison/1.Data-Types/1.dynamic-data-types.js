/* Dynamic data types are dynamic in nature and don't require initialization at the time of declaration. 
It also means that a dynamic type does not have a predefined type and can be used to store any type of data. JS is a dynamicaly typed variable. 
Because its type defines on its rigth side's value. */

const a1 = 25;
console.log(typeof a1);//output: number
const a2 = 'Nusrat Hurain';
console.log(typeof a2);//output: string
const a3 = true;
console.log(typeof a3);//output: boolean
const numbers = [2, 3, 4, 5, 6];
/* 
1. Except primitive data type all are a kind of object in js, 
such as- array, function etc
2. type of null is object although it is a primitive data.
*/
console.log(typeof numbers); //output: object. array is a type of object in js
function triple(x, y, z){

}
console.log(triple); //output: [Function: triple]
console.log(triple.length);//output: 3=>(As like array length. Array is an object. So, function is also object)
const x = null;
console.log(typeof x);//output:object