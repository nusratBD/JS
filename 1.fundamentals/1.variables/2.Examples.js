/* 
1)They are all hoisted to the top of their scope. But while var variables are initialized with 
undefined, let and const variables are not initialized.
*/
/* console.log(z);//output: undefined
console.log(y);//error: Cannot access 'y' before initialization
console.log(x);//error: Cannot access 'x' before initialization
const x = 'const';
let y = 'let';
var z = 'var'; */
/* ----------------------------------------------------------------------------------------------- */



/* 
2)var variables can be updated and re-declared within its scope; 
let variables can be updated but not re-declared; 
const variables can neither be updated nor re-declared.
*/
//a)var
//01. Reassign
var var1 = 5;
var1 = 6;
console.log(var1);//output: 6

//02. Redeclare
var var2 = 10;
var var2 = 30;
console.log(var2);//output: 30


//b)let
//01. Reaasign
let let1 = 40;
let1 = 50;
console.log(let1);//output: 50

/* //02. Redeclare
let let2 = 80;
let let2 = 90;
console.log(let2);//output: Error: Identifier 'let2' has already been declared */

//c) constant:
/* //01. Reassign
const x1 = 5;
x1 = 6;//output: Error: Assignment to constant variable.
x1 = 5;//output: Error: Assignment to constant variable. */

//Example -02
const array = [];
/* array = [];//output: Error: Assignment to constant variable. */
array.push(7, 8, 11);
console.log(array)//output: [ 7, 8, 11 ]
/* In JS, array is an object. So pushing element in array is updating the object property,
not reassigning the variable.*/

/* //02. Redeclare
const const1 = 'Tithi';
const const1 = 'Tithi';
console.log(const1);//output: error: Identifier 'const1' has already been declared */
/* ------------------------------------------------------------------------------------------------- */




/* 3)1)var declarations are globally scoped or function scoped while let and const are block scoped. */
//1.var
//Ex-01
var varScope = 'Out of Block';
if(true){
    var varScope = 'Inside of Block';
}
console.log(varScope);//output: Inside of Block
function varFunction(){
    var varScope = 'Out of Block';
    if(true){
        var varScope = 'Inside of Block';
    }
console.log(varScope);//output: Inside of Block
}
varFunction();

//2.let
//Ex-01
let letScope = 'Out of Block';
if(true){
    let letScope = 'Inside of Block';
}
console.log(letScope);//output: Out of Block
//Ex-02
function letFunction(){
    let letus = 'Outside of Block';
    {
        let letus = 'Inside of Block';
        console.log(letus);//output: Inside of Block
    }
    console.log(letus);//output: Outside of Block
}
letFunction();

//3.const: same to the let: block scope
/* ----------------------------------------------------------------------------------------- */




/* 4)While var and let can be declared without being initialized, const must be initialized during declaration. */
var var2;
var2 = 'var2';
console.log(var2);//output: var2
let let2;
let2 = 'let2';
console.log(let2);//output: let2
/* const const2;
const2 = 'const2';
console.log(const2);//output: errror: const2 = 'const2';
 */



