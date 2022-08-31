//1. num to string
const num = 50;
console.log(typeof num, num);//output: number 50
// const stringNum = num + '';//output: string 50
// const stringNum = ''+num;//output: string 50

/* let stringNum = num + 'a';//output: string 50a
stringNum = stringNum + 'b';//output: string 50ab */

/* let stringNum = 'a'+num;//output: string a50
stringNum = 'b' + stringNum;//output: string ba50 */
console.log(typeof stringNum, stringNum);

//2. string to num
const input = '980';
console.log(typeof input, input);//output: string 980
// const inputNum = +input;
console.log(typeof inputNum, inputNum);//output: number 980
