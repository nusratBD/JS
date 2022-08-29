//01. object to JSON
const self = {
    name: 'Nusrat Hurain',
    job: {
        profession: 'Software Engineer',
        languages: {
            web: ['html', 'css', 'js'],
            android: 'java-android studio'
        },
        housekeeping: ['cooking', 'cleaning', 'serving'],
        social: 'Dawah'
    }
}
const stringify = JSON.stringify(self)
console.log(stringify);
/* 
output:
{"name":"Nusrat Hurain","job":{"profession":"Software Engineer","languages":{"web":["html","css","js"],"android":"java-android studio"},"housekeeping":["cooking","cleaning","serving"],"social":"Dawah"}}
*/

//02. JSON to object
const parse = JSON.parse(stringify);
console.log(parse);
/* 
output:
{
  name: 'Nusrat Hurain',
  job: {
    profession: 'Software Engineer',
    languages: { web: [Array], android: 'java-android studio' },
    housekeeping: [ 'cooking', 'cleaning', 'serving' ],
    social: 'Dawah'
  }
}
*/