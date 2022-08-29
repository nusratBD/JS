const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
/* All the keys will be provided in an array */
const keys = Object.keys(self);
console.log(keys);//output: [ 'name', 'age', 'profession', 'salary' ]

/* All the values will be provided in an array. */
const values = Object.values(self);
console.log(values);//output: [ 'Nusrat Hurain', 25, 'Software Engineer', 50000000 ]