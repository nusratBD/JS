/* 
The split() method splits a string into an array of substrings.
The split() method returns the new array.
The split() method does not change the original string.
If (" ") is used as separator, the string is split between words.
*/
let anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';
let split = anthem.split(' ');
console.log(split);
let split1 = anthem.split('a');
/* 
output:
[
  'Am',       'r Son',
  'r B',      'ngl',
  ' Ami Tom', 'i V',
  'lob',      'si'
]
*/
console.log(split1);
let split2 = anthem.split('a', 2);//(a,2)=>a:split marker, 2=split numbers
console.log(split2)//output: [ 'Am', 'r Son' ]

let split3 = anthem.split('');
console.log(split3);
/* 
output:
[
  'A', 'm', 'a', 'r', ' ', 'S', 'o',
  'n', 'a', 'r', ' ', 'B', 'a', 'n',
  'g', 'l', 'a', ' ', 'A', 'm', 'i',
  ' ', 'T', 'o', 'm', 'a', 'i', ' ',
  'V', 'a', 'l', 'o', 'b', 'a', 's',
  'i'
]
*/
