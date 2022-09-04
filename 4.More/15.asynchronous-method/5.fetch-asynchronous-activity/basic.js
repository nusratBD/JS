/* 
Although js works synchronously, setTimeout() and fetch() are asynchronous. 
They don't maintain serial. When compiler sees fetch, it sends fetch in
another zone to load the data and goes to the next line for execution. 
At the sametime the loading of fetch also works. When the execution of
normal codes(synchronous code) is finished, compiler calls the fetch and compile the code 
and show the output. If the full task of fetch doesn't finish, it provides the completed 
portion to compiler and continuing remaining task.
*/
