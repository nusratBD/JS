/* How JS run line by line? */

/* 
Loading State:
When there is no code in JS, there exists a global execution context which
consists of window(browser):global object(nodejs), window:this(it points the window), variable object, and scope chain.

Before code execution, there is a loading phase where all these elements of global
execution context exist. In this phase, all the var variable comes to variable 
object as undefined, all the function(simple function) comes with reference.and all the scopes are catched in global execution context(scope chain department).
*/

/*
Execution State: 
After loading phase, when execution starts, it runs the code according to 
variable object(undefined for var and function from reference). If var assigns
variable, undefiend then replaces with that value.
 */

/* When interpreter starts interpretation, global execution context is created.
When function is called function execution context is created
*/