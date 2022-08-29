const products = [
    {name: 'laptop', price: 50000, brand: 'hp', color: 'silver'},
    {name: 'phone', price: 20000, brand: 'Redmi', color: 'Blue'},
    {name: 'watch', price: 50, brand: 'none', color: 'black'},
    {name: 'glass', price: 2000, brand: 'Blue Cart', color: 'blue'},
    {name: 'laptop', price: 40000, brand: 'lenovo', color: 'black'},
    {name: 'headphone', price: 20000, brand: 'samsung', color: 'white'}
]

/* 
1. copy the array and add a new product
Use of Spread Operator
*/
const newProduct = {name: 'Desktop', price: 30000, brand: 'Dell', color: 'black'};
console.log([...products, newProduct]);
/* 
output:
[
  { name: 'laptop', price: 50000, brand: 'hp', color: 'silver' },
  { name: 'phone', price: 20000, brand: 'Redmi', color: 'Blue' },
  { name: 'watch', price: 50, brand: 'none', color: 'black' },
  { name: 'glass', price: 2000, brand: 'Blue Cart', color: 'blue' },
  { name: 'laptop', price: 40000, brand: 'lenovo', color: 'black' },
  { name: 'headphone', price: 20000, brand: 'samsung', color: 'white' },
  { name: 'Desktop', price: 30000, brand: 'Dell', color: 'black' }
]
*/

/* 
2. Double the price of all products, and keep it in another array.
Use of map
*/
const mapProducts = products.map(product=>{
    product.price = product.price*2;
    return product;
});
console.log(mapProducts);
/* 
output: [
  { name: 'laptop', price: 100000, brand: 'hp', color: 'silver' },
  { name: 'phone', price: 40000, brand: 'Redmi', color: 'Blue' },
  { name: 'watch', price: 100, brand: 'none', color: 'black' },
  { name: 'glass', price: 4000, brand: 'Blue Cart', color: 'blue' },
  { name: 'laptop', price: 80000, brand: 'lenovo', color: 'black' },
  { name: 'headphone', price: 40000, brand: 'samsung', color: 'white' }
]
*/

/* 
3. out all the laptops from the products.
Use of filter
*/
const filterProduct = products.filter(product=>product.name!=='laptop');
console.log(filterProduct);
/* 
output:
[
  { name: 'phone', price: 40000, brand: 'Redmi', color: 'Blue' },
  { name: 'watch', price: 100, brand: 'none', color: 'black' },
  { name: 'glass', price: 4000, brand: 'Blue Cart', color: 'blue' },
  { name: 'headphone', price: 40000, brand: 'samsung', color: 'white' }
]
*/