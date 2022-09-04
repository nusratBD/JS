/* 
1. var: hoisting occurs for var and functin.
2. let, const: hoisting doesn't occur for let and const.
*/
/* 
1. function hoisting with output:
When we declare a function on the bottom of the page, but call it on to the top, we get the exact output. Because in that case it keeps the reference of the full function, and according to the reference it dispalys the exact output.
*/

/* 
2. var hoisting: When we create a var variable on the bottom of the page, but use on the top
we get undefined. Because in that case, it only keeps the reference of the variable name, 
but does not keep the reference of the value.
So, it can not find out the value of the variable, and therefore it displays undefined.

3. In the case of let and const, it doesn't keep the variable name nor the value. As a result, when
we create it on the bottom and use on the top, it says 'can not access x/y(let, const variable) 
before initialization.'
*/