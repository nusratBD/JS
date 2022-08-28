//1. Object Declaration
const myself ={
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Study'
}

//2. Getting full object
console.log(myself);
//output: { name: 'Nusrat Hurain', age: 25, profession: 'Study' }

//3. Getting specific property: 5 ways

//01) Direct by property
console.log(myself.name);

//02) Property name string
console.log(myself['age']);

//03) Property name in a variable
const job = 'profession';
console.log(myself[job]);

//04) property stored in a variable
const myName1 = myself.name;
const myName2 = myself['name'];
console.log(myName1);
console.log(myName2);

//05)Destrurcturing
const {name, age, profession} = myself;
console.log(name, age, profession);