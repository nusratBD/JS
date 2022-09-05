/* How compiler works */
/* 
Compiler takes the whole code together instead of line by line.
Then run one one. As a result it can work fast. During compilation, 
if compiler found any mistake, it ignores it and go to the next line.

As a result, if there is any memory leak, it will crash the system, but
we won't understand the problem that what happend in the code. We could 
only know the problem after finishing the full compilation.

So, compilation is fast process but it is difficult to debug and there is
a possibility to system crash. 
*/