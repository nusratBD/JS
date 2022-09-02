const student = {
    id:101,
    name:'Nusrat Hurain',
    major:'Software Engineering',
    subjects:['math','physics','chemistry','english', 'programming fundamentals', 'economics'],
    hobbies:{
        indoor: ['book reading, cooking, gardening'],
        outdoor: 'travelling'
    },
    isHardWorker: true,
    job: function(){
        console.log(this.name, 'will get a job very soon, ingSaAllah.');
    },
    income: 50000000,
    donation: function(don, monthlyCost){
        this.income = this.income - don - monthlyCost;
        return this.income;
    }
}

//Accessing Object Property
student.job();//output: Nusrat Hurain will get a job very soon, ingSaAllah.
const currentAmount = student.donation(10000000, 10000);
console.log(currentAmount);//output: 39990000
const currentAmount2 = student.donation(5000000, 10000);
console.log(currentAmount2);//output: 34980000
console.log(student);
/* 
output:
{
  id: 101,
  name: 'Nusrat Hurain',
  major: 'Software Engineering',
  subjects: [
    'math',
    'physics',
    'chemistry',
    'english',
    'programming fundamentals',
    'economics'
  ],
  hobbies: {
    indoor: [ 'book reading, cooking, gardening' ],
    outdoor: 'travelling'
  },
  isHardWorker: true,
  job: [Function: job],
  income: 34980000,
  donation: [Function: donation]
}
*/
