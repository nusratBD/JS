const value = '100';
console.log(typeof value, value);//output: string 100

//1. string to number
console.log(typeof parseInt(value), value);//output: number 100
console.log(typeof parseFloat(value), value);

//2. number to string
const y = 20;
console.log(typeof JSON.stringify(y),y);//output: string 20