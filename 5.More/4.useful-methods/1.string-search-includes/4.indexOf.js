/* 
The indexOf() method returns the position of the first occurrence of a value in a string.
The indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive.
*/
let products = [
    'Dell Laptop',
    'hp laptop',
    'SAMSUNG phone',
    'iPhone',
    'Google Smart Watch',
    'Tesla phone',
    'Asus laptop'
]
let search = 'laptop';
let searchValue = [];
for(let product of products){
    console.log(product.toLowerCase().indexOf(search.toLowerCase()));
    /* 
    output: 
    5
    3
    -1
    -1
    -1
    -1
    5
    []
    */
    if(product.toLowerCase().indexOf(search.toLowerCase())!= -1){
    searchValue.push(product);
    }
}
console.log(searchValue);
//output: [ 'Dell Laptop', 'hp laptop', 'Asus laptop' ]