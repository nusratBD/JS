/* 
The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).
*/
let myName = ['Nusrat', 'Hurain', 'Nuha'];
let join1 = myName.join();
console.log(join1);//output: Nusrat,Hurain,Nuha

let join2 = myName.join('');
console.log(join2);//output: NusratHurainNuha

let join3 = myName.join(' ');
console.log(join3);//output: Nusrat Hurain Nuha

let join4 = myName.join('-');
console.log(join4);//output: Nusrat-Hurain-Nuha

let join5 = myName.join(', ');
console.log(join5);//output: Nusrat, Hurain, Nuha
