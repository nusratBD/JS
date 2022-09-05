/* If we console arguments inside of a function, we will see all the parameters of
the function as the property of an object.
*/

function test(a, b){
    console.log(arguments);
}
test(2,3);//output: [Arguments] { '0': 2, '1': 3 }

/* 
global execution context vs function execution context:

only one difference. global execution context creates global object that funtion 
execution context does not create. Function execution context creates its own
object with its parameters.
*/

/* Function execution context is created when function will be called. */