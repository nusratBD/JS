/* 
The substr() method extracts a part of a string.
The substr() method begins at a specified position, and returns a specified number of characters.
The substr() method does not change the original string.
To extract characters from the end of the string, use a negative start position.
*/
let anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';
let subStr = anthem.substr(5, 5);//(x, y)->x is starting point, y->number of character
console.log(subStr);//output: Sonar