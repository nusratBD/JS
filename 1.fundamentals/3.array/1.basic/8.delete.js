/*When we delete any array element, the element is deleted but it holds the position with <empty item> although the index becomes undefined. */
const numbers2 = [2, 3, 4, 5];
delete numbers2[2];
console.log(numbers2);//output: [ 2, 3, <1 empty item>, 5 ]
console.log(numbers2[2]);//output: undefined
delete numbers2[3];
console.log(numbers2);//output: [ 2, 3, <2 empty items> ]
delete numbers2[0];
console.log(numbers2);//output: [ <1 empty item>, 3, <2 empty items> ]