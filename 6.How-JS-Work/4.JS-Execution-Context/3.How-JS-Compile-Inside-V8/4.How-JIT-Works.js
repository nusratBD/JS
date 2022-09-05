/* How JIT-Compiler Works */
/* 
Just in time Compiler(JIT) is the mixture of interpreter and compiler that
is used in V8 engine.

It has taken the easy to debug part of interpreter and fast process of compiler.
It is not as fast as copiler but good enough.

JIT-Compiler has two devision to work
JIT: interpretation
Compiler: transform the interpreted code into machine code.

JIT interprets the code line by line and transfer to the compiler. While JIT finds
any mistakes, it shows the error. As a result we get the error instantly from the
JIT and fast runned machine code from compiler.
*/