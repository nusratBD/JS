/* 
Method: Method is a special type of function associated with object.
If we want to access any varaibel to method outside of it, we have to use this keyword. constructor is a special method;
*/
class Self{
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    hello(){
        console.log(`Hello ${this.name}, How are you? What is your age?
        Ans: ${this.age}`);
    }
}
const self = new Self('Nusrat', 25);
console.log(self);//output: Self { name: 'Nusrat', age: 25 }
self.hello();
/* 
Hello Nusrat, How are you? What is your age?
        Ans: 25
*/