//Add Product to Cart
let cart = [101, 102, 103, 104];
cart.push(105);
console.log(cart);
// RemoveSold Out item
let carts = [101, 102, 103, 104];
cart = cart.filter((product) => product !== 103);
console.log(carts);
// Insert at Specific Position 
let fruits = ["apple", "orange", "grapes"];
fruits.splice(2, 0, "banana");
console.log(fruits);
// Print All Students 
let students = ["Ali", "Zara", "John"];
let eachStudent = students.forEach((student) => {
    console.log("Hello, " + student + "!");
});
// Delete First item from Queuelet 
orders = ["order1", "order2", "order3"];
orders.shift();
console.log(orders);