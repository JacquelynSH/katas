// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
// For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(qty, price) {
const freeMango = Math.floor(qty / 3);
return (qty - freeMango) * price;
};

console.log(mango(2, 3));
console.log(mango(3, 3));

console.log(mango(5, 3));
console.log(mango(9, 5));
