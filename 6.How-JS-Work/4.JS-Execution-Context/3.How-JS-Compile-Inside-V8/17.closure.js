var sum = 0;
function doSum(a){
    return function(b){
        return a + b;
    }
}
var temp = doSum(2);
sum = sum + temp(8);
console.log(sum);

/* What happens here:
1. global context: sum = undefined, doSum() are stored
2. interpreter comes to line 7, and will make a function execution context
3. When it sees doSum() returned a function but didn't call anywhere,
it thinks this function can be necessary pops the function execution conetext.
Therefore, before poping, it stores all its arguments for its returned function and
then pops out.
4. As result, although doSum Execution context pops out, the value of a exists.
*/