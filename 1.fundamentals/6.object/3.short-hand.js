//2 ways:
//01.
const x = 'Nusrat Hurain';
const y = 25;
const self = {name: x, age: y};
console.log(self);
//output: { name: 'Nusrat Hurain', age: 25 }

//02.
const name = 'Nusrat Hurain Nuha';
const profession = 'Software Engineer';
const obj = {name, profession};
console.log(obj);
//output: { name: 'Nusrat Hurain Nuha', profession: 'Software Engineer' }

/* 
N.B-
1. If we set the key, it will just take the variable value as key value.
2. If we do not set the key, it will set the variable name as the key and variable
value as the key value.
*/