/* 
The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
The substring() method extracts characters from start to end (exclusive).
The substring() method does not change the original string.
If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
Start or end values less than 0, are treated as 0.
*/
let anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';
let subString = anthem.substring(5, 10);//(x,y)=>x=starting point:(x-1), y=ending point
console.log(subString);//output: Sonar