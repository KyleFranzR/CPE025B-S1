function getInventoryValuation(inventory) {
    let techSum = 0;
    let furnSum = 0;
    
    for (let i of inventory) {
        if (i.qty > 0 && i.category === "Tech") {
            techSum += (i.price * i.qty);
        } else if (i.qty > 0 && i.category ==="Furniture") {
            furnSum += (i.price * i.qty);
        }
    }

    return ({'Tech' : techSum, 'Furniture' : furnSum});
}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory)); 
