var productName=prompt("Enter product Name");
var productQuantity=prompt("Enter quantity of items");
var productPrice=prompt("Enter product Price");


console.log(productName);
console.log(productQuantity);
console.log(productPrice);

let total=productQuantity * productPrice;
let taxes=0.075;
localTax=total * taxes;
totalPrice=localTax + total;
console.log(localTax);
console.log(totalPrice);


