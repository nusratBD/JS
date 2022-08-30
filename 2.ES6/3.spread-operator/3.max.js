/* 
Find out the largest value of an array.
*/

//01. for loop solution
const array = [23, 45, 12, 78, 56, 86, 13, 16];
let max = array[0];
for(let i= 1; i<=array.length; i++){
    if(array[i]>max){
        max = array[i];
    }
}
console.log(max);//output: 86

//02. spread operator solution solution
console.log(Math.max(...array));//output: 86

