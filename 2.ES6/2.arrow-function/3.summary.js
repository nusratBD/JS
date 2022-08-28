//a) Implicit Return

//01. No Parameter
const getFifty = () => 55

//02. One parameter
const add = x = x + 60;

//03. One parameter condition
const isEven = x => x%2==0;
const evenResult = isEven(5);
console.log(evenResult);
//output: false

//04. multiple parameter
const multiple = (x, y, z) =>x+y+z;

//b)Explicit Return
const multiline = (x, y, z) =>{
    const sum = x+y;
    const multiplication = y*z;
    return multiplication - sum;
}