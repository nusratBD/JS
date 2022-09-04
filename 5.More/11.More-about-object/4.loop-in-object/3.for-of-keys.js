const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
const keys = Object.keys(self);
console.log(keys);//output: [ 'name', 'age', 'profession', 'salary' ]
for(const key of keys){
    console.log(key,': ',self[key]);
    /* 
    output:
    name :  Nusrat Hurain
    age :  25
    profession :  Software Engineer
    salary :  50000000
    */
}