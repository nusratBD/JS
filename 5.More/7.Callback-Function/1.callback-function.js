/* 
At the time of calling a function if we pass an annonymous function as a parameter 
of the calling function, this annonymous function is called callback function.
Example: document.getElementById('my-btn).addEventListener('click', function(){
})
*/
function test(name,print){
    print(name);
}
test('Nusrat',function(name){
    console.log('Hi', name);
})//output: Hi Nusrat

//Multiple Callback Function
function test2(data, callback1, callback2){
    console.log(data);//output: Nusrat Hurain: Software Engineer
    callback1(data);
    callback2(data);
}
test2('Nusrat Hurain: Software Engineer', function(data){
    console.log(data.toUpperCase())//output: NUSRAT HURAIN: SOFTWARE ENGINEER
}, function(data){
    console.log(data.toLowerCase())//output: nusrat hurain: software engineer
})