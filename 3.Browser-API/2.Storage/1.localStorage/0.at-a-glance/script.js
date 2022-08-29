/* 
1. If we want to keep an array to the local storage, we must keep it in
JSON stringify format. Otherwise it will store the data just as a plain text.

2. If we want to keep an array to the local storage, we must keep it in
JSON stringify format. Otherwise it store [Object Object];
*/
function saveProduct(){
    const productField = document.getElementById('product');
    const productValue = productField.value;
    const priceField = document.getElementById('price');
    const priceValue = priceField.value;
    productField.value = '';
    priceField.value = '';
    if(productValue && priceValue){
        window.localStorage.setItem(productValue,JSON.stringify(priceValue));
    }
    
}
let laptop = window.localStorage.getItem('laptop');
    console.log(laptop);
let mobile = window.localStorage.getItem('mobile');
mobile = JSON.parse(mobile);
console.log(mobile);