let numbers = [67, 89, 147, 33, 270];
console.log(numbers.sort());
/* 
output: It sorts according to the first character of the number.
[ 147, 270, 33, 67, 89 ]
*/

numbers.sort(function(a, b){
    return a - b;
})
console.log(numbers);
//output: [ 33, 67, 89, 147, 270 ]