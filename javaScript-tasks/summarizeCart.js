function summarizeCart(items){
    const t=items.reduce((s,i)=>s+i.price*i.qty,0);// Use reduce to calculate the total price (t) by summing up the product of price and quantity for each item, and the total count (c) by summing up the quantity of each item.
    const c=items.reduce((s,i)=>s+i.qty,0); // Use reduce to calculate the total price (t) by summing up the product of price and quantity for each item, and the total count (c) by summing up the quantity of each item.
    return `Total: $${t.toFixed(2)} (${c} items)`}

    const cart = [
    { name: "Pen", price: 1.2, qty: 3 },
    { name: "Notebook", price: 2.5, qty: 2 }
];

console.log(summarizeCart(cart));
console.log(summarizeCarts(cart));

function summarizeCarts(items){
    let total = 0;
    let count = 0;
    for (let item of items){
        total += item.price * item.qty;
        count += item.qty;

    }
    return `Total : $${total.toFixed(2)} (${count} items there are in the cart)`;

}