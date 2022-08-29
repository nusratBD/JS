const { is } = require("@babel/types");

const money = 80;
const cokePrice = 60;
/* 
Write a program for your money condition by ternary operator.
If money is greater than 100, eat biriyani.
else tea-biscuit.
*/

//Ex-01
const food = money>100?'biriryani':'tea-biscuit';
console.log(food);//output: tea-biscuit

//Ex-02
const drinks = (money>100 && cokePrice<100)?'coke':'water';
console.log(drinks);//output: water

//Ex-03
let isActive = true;
function showUser(){
    console.log('User is Active');
};
function hideUser(){
    console.log('User is not active');
}
isActive?showUser():hideUser();//output: User is Active

//04: if left side is true. right side will be executed
isActive && showUser();//output: User is Active

//05: if left side is false, right side will be executed
isActive || hideUser();//output: nothing

//06. toggle boolean
isActive = !isActive;
console.log(isActive);//output: false