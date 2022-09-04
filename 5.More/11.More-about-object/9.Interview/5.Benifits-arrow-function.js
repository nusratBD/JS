/* Arrow function performs the task of bind,call,apply methods. */

//01. Normal Function
const self = {
    name: 'Nusrat Hurain',
    aim: function(){
        function job(){
            console.log(this.name, `is a Software Engineer`);
        }
        // job.bind(this);
       const job2 = job.bind(this);
        job2();
    }
}
self.aim();//output: Nusrat Hurain is a Software Engineer

//02. Arrow Function
const self2 = {
    name: 'Nusrat Hurain',
    age: 25,
    aim: function(){
       const job = ()=>{
            console.log(this.name,',', this.age, `years old, is a Software Engineer`);
        };
        job();
    }
}
self2.aim();//output: Nusrat Hurain , 25 years old, is a Software Engineer

//03. Normal Function
/* const self3 = {
    name: 'Nusrat Hurain',
    aim: function(){
        setTimeout(function(){
            alert(`Hello, ${this.name}`);
        }.bind(this),1000);
    }
}
self3.aim(); */

//04. Arrow Function
const self4 = {
    name: 'Nusrat Hurain',
    aim: function(){
        setTimeout(()=>{
            alert(`Hello, ${this.name}, Good Morning.`);
        },2000);
    }
}
self4.aim();

