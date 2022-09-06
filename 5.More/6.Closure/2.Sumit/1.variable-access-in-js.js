/* There are two ways to use variables in a function from outside
1. parameter
2. closure
*/

//01. parameter
function add(num1, num2){
    return num1 + num2;
}
const result = add(2, 3);
console.log(result);//output: 5

//02. closure
const x = 5;
const y = 2;

function add2(){
    return x + y;
}
const result2 = add2()
console.log(result2);//output: 7