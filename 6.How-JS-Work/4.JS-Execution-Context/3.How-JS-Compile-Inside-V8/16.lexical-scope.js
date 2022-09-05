/* 
A lexical scope in JavaScript means that a variable defined outside a function 
can be accessible inside another function defined after the variable declaration. 
But the opposite is not true; the variables defined inside a function will not be
accessible outside that function.
*/
function hello(){
    var mgs = 'Hello World';
}

hello();
console.log(mgs);//Reference Error

/* 
What happens here:
1. First a global execution context is created where hello() function is stored
2. Then it comes to the line number five, and then immediately a function execution
context is created.
3. In function execution context, first it store mgs=undefined,
4. Then mgs is replace with 'Hello World'. Here the function context pops out from stack
5. Then it comes to the line number 6, but at that time no functional context exists.
6. So it can not find anthing(no reference) in memory with the name of mgs. 
7. So it will give Reference Error
*/