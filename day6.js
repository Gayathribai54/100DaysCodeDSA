//DAY 6 DSA CHALLENGE


//🛒 Q1. Add Product to Cart

// You’re working on an e-commerce site.
//  Insert a new product ID 105 at the end of the cart array.
// Insert 105 at the end
let cart = [101, 102, 103, 104];
cart.push(105);
console.log(cart);

// 🧼 Q2. Remove Sold Out Item

// Given a cart with product IDs, remove the product 103 from it.

let carts = [101, 102, 103, 104];
let remove=carts.filter((n)=>{
     if (n === 103) {
        let index = carts.indexOf(n);
        if (index !== -1) {
            carts.splice(index, 1);
        }
    }
});
console.log(carts);
// if (index !== -1):
//  This check ensures that the value exists (just in case).
// carts.splice(index, 1): 
// This removes 1 element starting at the found index — which removes 103.


// 📍 Q3. Insert at Specific Position

// Insert "banana" at the 2nd index in this fruits array:

let fruits = ["apple", "orange", "grapes"];
    fruits.splice(2,0,"banana")
    console.log(fruits);


// 🔁 Q4. Print All Students

// Traverse the students array and print a message like:
// 📢 “Hello, <studentName>!” for each name.

let students = ["Ali", "Zara", "John"];
students.forEach((n)=>{
    console.log(`hello, ${n}`);
});

//📦 Q5. Delete First Item from Queue

// You are simulating a queue. 
// Remove the first item from this list of orders:

let orders = ["order1", "order2", "order3"];
orders.shift(1,0)
console.log(orders);