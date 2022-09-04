/* 
One function can return only one variable. But sometimes, it is necessary to send multiple data.
In that case we can store all the data in an object 
as objects property and then return it. Besides we can
store all the data in an array also and then return it.
*/
// Examples:
//01
function test1(){
    const name = 'Nusrat Hurain';
    const age = 25;
    const profession = 'Software Engineer';
    return [name, age, profession];
}
const result1 = test1();
console.log(result1);//output: [ 'Nusrat Hurain', 25, 'Software Engineer' ]
console.log(result1[0]);//output: Nusrat Hurain

//02
function test2(){
    const name = 'Nusrat Hurain';
    const age = 25;
    const profession = 'Software Engineer';
    return {
        name: name,
        age: age,
        profession: profession
    }
}
const result2 = test2();
console.log(result2);//output: { name: 'Nusrat Hurain', age: 25, profession: 'Software Engineer' }
console.log(result2.name);//output: Nusrat Hurain
