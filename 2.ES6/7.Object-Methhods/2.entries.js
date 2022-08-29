const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
/* 
1. each property(key) and its value will create an array.
2. all the key-value array will push in another array.
*/
const entries = Object.entries(self);
console.log(entries);
/* 
output: [
  [ 'name', 'Nusrat Hurain' ],
  [ 'age', 25 ],
  [ 'profession', 'Software Engineer' ],
  [ 'salary', 50000000 ]
]
*/