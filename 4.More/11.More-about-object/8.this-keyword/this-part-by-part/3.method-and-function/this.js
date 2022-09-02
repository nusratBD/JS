/* 
this is accessible in method, but not in function
*/
const obj = {
    name: 'Nusrat',
    age: 25,
    study: function(){
        console.log(this.name,': ',this.age);//output: Nusrat :  25
        function versity(){
            console.log(this.name, 'is studying in self university');//undefined is studying in self university=>because varsity is a function not a method
        }
        versity();
    }
}
obj.study();