/* 
1. keys returns an array of all object property name.
2. values returns an array of all object values.
*/
const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
const keys = Object.keys(self);
console.log(keys);
const values = Object.values(self);
console.log(values);