//৪. arrow ফাংশন আর রেগুলার ফাংশন এর মধ্যে ডিফারেন্স কি 
/* Ref: https://youtu.be/-k6rjxLfbok */
/* 
1. arrow function has no this of its own, but regular function has its own this.

Explanation: When normal function works as a method(property of an object), 'this' refers
the full object. And in normal case 'this' refers the window object.

But 'this' inside of an arrow function always refers its parents 'this' wheter it is method or function.

This means arrow function has no capability to create its own 'this'. If its parents 'this' is an object, arrow functions 'this' will also be an object. 
If its parents 'this' is an window, arrow functions 'this' will also be an window.
*/

/* 
2. We can use bind,call,apply method in regular function by which we can access
object/this in function. But it(bind, call, apply) is not possible at arrow function.

That meas we can not access any outer context inside of an arrow function. It can only access its parents content.
*/

//Ex-01
const obj = {
    name: 'Nusrat Hurain',
    print: ()=>{
        console.log(this);
        /* 
        output: window 
        Here, the parent of arrow function is obj.
        Objs this is window. So, arrow functions this is also window.
        */
    }
}
obj.print();

//Ex-02
const obj2 = {
    name: 'Nusrat Hurain',
    print: function(){
        console.log(this);//output: {name: 'Nusrat Hurain', print: ƒ}=>method this always get the existing object
        const x = ()=>{
            console.log(this);
            /* 
            output: {name: 'Nusrat Hurain', print: ƒ}.
            Here, the parent of x arrow function is function() whoes this is an object. So x(arrow function)s this is also exact that object.
            */ 
            console.log(this.name);//output
        }
        x();
    }
}
const result = obj2.print();