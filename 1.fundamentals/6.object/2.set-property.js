//3 ways
const myself ={
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Study'
}
//01
myself.name = 'Nusrat Hurain Nuha';
console.log(myself.name);
//output: Nusrat Hurain Nuha

//02
myself['age'] = 26;
console.log(myself.age);
//output: 26

//03
let job = 'profession';
myself[job] = 'Software Engineer';
console.log(myself.profession);
//output: Software Engineer