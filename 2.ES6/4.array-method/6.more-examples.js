const products = [
    {name: 'laptop', price: 50000, brand: 'hp', color: 'sliver'},
    {name: 'watch', price: 5000, brand: 'Samsung', color: 'khaki'},
    {name: 'mobile', price: 20000, brand: 'Redmi', color: 'blue'},
    {name: 'bag', price: 3000, brand: 'acer', color: 'black'},
    {name: 'headphone', price: 2000, brand: 'walton', color: 'dark'},
    {name: 'laptop', price: 40000, brand: 'lenovo', color: 'black'},
]

//01.map
/* Take all the brand from theobjects and push them into an array */
const brand = products.map(product=>product.brand);
console.log(brand);
//output: [ 'hp', 'Samsung', 'Redmi', 'acer', 'walton', 'lenovo' ]

//02. forEach
//Ex-01
products.forEach(product=>console.log(product));
/* 
output:
{ name: 'laptop', price: 50000, brand: 'hp', color: 'sliver' }
{ name: 'watch', price: 5000, brand: 'Samsung', color: 'khaki' }
{ name: 'mobile', price: 20000, brand: 'Redmi', color: 'blue' }
{ name: 'bag', price: 3000, brand: 'acer', color: 'black' }
{ name: 'headphone', price: 20000, brand: 'walton', color: 'dark' }
{ name: 'laptop', price: 40000, brand: 'lenovo', color: 'black' }
*/
//Ex-02
products.forEach(product=>console.log(product.name));
/* 
output:
laptop
watch
mobile
bag
headphone
laptop
*/

//03. filter
/* Show all the products those price are lower than 5000 */
//Ex-01
const filterProduct = products.filter(product=>product.price<5000)
console.log(filterProduct);
/* 
output:
[
  { name: 'bag', price: 3000, brand: 'acer', color: 'black' },
  { name: 'headphone', price: 2000, brand: 'walton', color: 'dark' }
]
*/
//Ex-02
const specificLetter = products.filter(product=>product.name.includes('a'));
console.log(specificLetter);
/* 
output:
[
  { name: 'laptop', price: 50000, brand: 'hp', color: 'sliver' },
  { name: 'watch', price: 5000, brand: 'Samsung', color: 'khaki' },
  { name: 'bag', price: 3000, brand: 'acer', color: 'black' },
  { name: 'headphone', price: 2000, brand: 'walton', color: 'dark' },
  { name: 'laptop', price: 40000, brand: 'lenovo', color: 'black' }
]
*/

//04. find
/* Show the first element that includes 'a'  in the name*/
const find = products.find(product=>product.name.includes('a'));
console.log(find);
//output: { name: 'laptop', price: 50000, brand: 'hp', color: 'sliver' }