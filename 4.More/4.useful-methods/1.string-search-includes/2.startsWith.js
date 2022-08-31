let products = [
    'Dell Laptop',
    'hp laptop',
    'Tesla Laptop',
    'tesla Motors',
    'SAMSUNG phone',
    'iPhone',
    'Tesla Rocket',
    'Tesla Smart Watch',
    'Google Smart Watch',
    'Tesla phone',
    'Asus laptop'
];
let search = 'tesla';
let searchValue = [];
for(let product of products){
    if(product.toLowerCase().startsWith(search.toLowerCase())){
        searchValue.push(product);
    }
}
console.log(searchValue);
/* 
output:
[
  'Tesla Laptop',
  'tesla Motors',
  'Tesla Rocket',
  'Tesla Smart Watch',
  'Tesla phone'
]
*/