let fName = 'Nusrat';
let mName = 'Hurain';
let lName = 'Nuha';

// let fullName = fName + ' ' + mName + ' ' + lName;
let fullName = fName.concat(' ').concat( mName).concat(' ').concat(lName);
// console.log(fullName); 

//concat array:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);//output: [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

const arr11 = ["Cecilie", "Lone"];
const arr22 = ["Emil", "Tobias", "Linus"];
const arr33 = ["Robin"];
const children1 = arr1.concat(arr22, arr33);
console.log(children1);//output: [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]

/* 
The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.
*/