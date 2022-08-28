let vowels = ['a', 'e', 'i', 'o', 'u'];

//1. getting the index of an existing value
console.log(vowels.indexOf('i'));
//output: 2

//02. index -1 (getting the index of an unexisting value) 
console.log(vowels.indexOf('p'));
//output: -1

//03. value according to index
console.log(vowels[3]);
//output: o

//04. change the value of an index
vowels[4] = 's';
console.log(vowels);
//output: [ 'a', 'e', 'i', 'o', 's' ]