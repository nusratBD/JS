/* 
1. map returns an array
2. filter returns an array
3. find returns only the value, not in array
4. forEach returns nothing
All this are applicable only for array
*/

/* 
map: map works on an array. It loops(for of) the array, then do necessary
operation. After that it pushes the operate output into a new array and 
return it.
*/

/* 
filter: filter works on an array. It loops on the element of the array. 
While looping if the value matches the condition. it pushes the value
inside of a new array. Finally it returns the new array. If no data matches 
the condition, it returns an empty array.
*/

/* 
find: find works on an array. It loops on the element of the array.
While looping, if any value matches the condition, it returns that value
and stop looping. It just retuns the first value corresponding to the condition
without any array. If it doesn't find any data according to the data, it
returns 'undefined', but no array.
*/

/* 
forEach: It works on array and loops the element of the array. It returns nothing.
It is as similar as for loop. If we want to use the value(getting from the array), 
we must use it inside the loop.
*/