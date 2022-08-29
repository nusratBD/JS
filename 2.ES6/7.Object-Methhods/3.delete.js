const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
delete self.age;
console.log(self);
/* 
output:
{
  name: 'Nusrat Hurain',
  profession: 'Software Engineer',
  salary: 50000000
}
*/