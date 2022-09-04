const array = [34, 56, 78, 90];

//01.
 [p, q] = [34, 56, 78, 90];
console.log(p, q); //output: 34, 56

//02.
[x, y] = array;
console.log(x, y);//output: 34, 56

/* 
03.
variable type is recommended. Otherwiste, the variable hoists on the top(global scope)
that is harmful for security.
*/
const [m, n] = array;
console.log(m,n);//output: 34, 56

//04.
function makeArray(num1, num2){
    const nums = [num1, num2];
    return nums;
}
console.log(makeArray(30, 40));//output: [ 30, 40 ]
const [i, j] = makeArray(10, 20);
console.log(i, j);//output: 10 20

//05.
const myself = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    hobbies: ['book reading', 'cooking', 'gardening', 'travelling']
}

const [hobby1, hobby2] = myself.hobbies;
console.log(hobby1, hobby2);//output: book reading cooking

//06.
const self = {
    name: 'Nusrat Hurain',
    job: {
        profession: 'Software Engineer',
        languages: {
            web: ['html', 'css', 'js'],
            android: 'java-android studio'
        },
        housekeeping: ['cooking', 'cleaning', 'serving'],
        social: 'Dawah'
    }
}
const [housekeeping1, housekeeping2] = self.job.housekeeping;
console.log(housekeeping1);//output: cooking