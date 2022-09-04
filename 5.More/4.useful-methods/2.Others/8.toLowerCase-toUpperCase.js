/* 
The toLowerCase() method converts a string to lowercase letters.
The toLowerCase() method does not change the original string. 

The toUpperCase() method converts a string to uppercase letters.
The toUpperCase() method does not change the original string.
*/
let name = 'Nusrat Hurain';
console.log(name.toLowerCase());//output: nusrat hurain
console.log(name.toUpperCase());//output: NUSRAT HURAIN
let name1 = 'nusrat Hurain';
let name2 = 'Nusrat hurain';
if(name1 == name2){
    console.log('They Matched');
}
else if(name1.toLowerCase()==name2.toLowerCase()){
    console.log('They Matched by toLowerCase function');
}
//output: They Matched by toLowerCase function