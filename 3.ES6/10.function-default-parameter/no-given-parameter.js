//Case 01:
// function add(num1, num2){
//     let total = num1 + num2;
//     return total;
// }
// let result = add(12, 10);

//Case 02
function add(num1, num2){
    // console.log(num1, num2); //num2 = undefined
    let total = num1 + num2;//total NaN; value + undefined = NaN.
    return total;
}
let result = add(12);
// console.log(result);

//Solution 01 of Case 02
function add2(num1, num2){
    // console.log(num1, num2); //num2 = undefined
    if(num2 == undefined){
        num2 = 0;
    }
    let total = num1 + num2;
    return total;
}
let result2 = add2(12);
// console.log(result2);
//Solution 02 of Case 02
function add3(num1, num2){
    // console.log(num1, num2); //num2 = undefined
    num2 = num2 || 0; // If there is no value in num2 it will be 0, otherwise it will get its given value;
    let total = num1 + num2;
    return total;
}
let result3 = add3(12);
// console.log(result3);
//ES6 Solution of Case 02
function add4(num1, num2=0){
    console.log(num1, num2); //num2 = 0;(for result4)
    let total = num1 + num2; //num2 = 17;(for result5)
    return total;
}
let result4 = add4(12);
let result5 = add4(12, 17);
console.log(result4);

function name(fName, lName = 'Hurain'){
    let fullName = fName + ' ' + lName;
    return fullName;
}
let fullName = name('Nusrat', 'Nuha');
let fullName2 = name('Nusrat');
console.log(fullName);
console.log(fullName2);

function max(data = []){
    let output = Math.max(...data);
    return output;
}
let result6 = max([34, 67, 23, 44]);
console.log(result6);//output: 67
let result7 = max();
console.log(result7);//-Infinity. Because default array is empty