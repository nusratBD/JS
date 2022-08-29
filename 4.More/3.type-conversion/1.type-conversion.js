//1. num to string
const num = 50;
console.log(typeof num, num);//output: number 50
const stringNum = num + '';
console.log(typeof stringNum, stringNum);//output: string 50

//2. string to num
const input = '980';
console.log(typeof input, input);//output: string 980
const inputNum = +input;
console.log(typeof inputNum, inputNum);//output: number 980