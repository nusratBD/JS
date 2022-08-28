//It is applicable for object. It extracts the keys of an object
const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
for(const data in self){
    console.log(data);
    /* 
    output: 
    name
    age
    profession
    salary
    */
}