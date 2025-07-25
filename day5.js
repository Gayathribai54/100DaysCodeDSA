// DAY 5 CHALLENGE 
// 🔎 Problem 1: Separate Phone Numbers

// Problem:
// You are given an array of phone numbers. 
// Some are Indian numbers (+91 format) and others are US numbers (+1 format). 
// Write a function to separate them into two different arrays.

const phoneNumbers = [
  "+91987654321",
  "+1408555123",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];
let indian=phoneNumbers.filter((n)=>{
    if(n.startsWith('+91')){
        phoneNumbers.length===10;
        return n;
    }
})
console.log('indianNumbers:', indian);
let other=phoneNumbers.filter((n)=>{
    if(n.startsWith('+1')){
        phoneNumbers.length===10;
        return n;
    }
})
console.log('usNumbers;', other);



//✨ Problem 2: Insert Product in Cart

// Problem:
// You're building a shopping cart.
//  Given an array of product IDs in the cart,
//  write a function that inserts 
// a new product at the second position (index 1).

let cart = [101, 102, 104];
let newProduct = 103;
cart.splice(1,0,newProduct);
console.log(cart);


// 💼 Problem 3: Insert Student in Waiting List

// Problem:
// You are managing a waiting list of students for an event. 
// Add a new student at the end of the list using a built-in method.

let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waitingList.push(newStudent);
console.log(waitingList);

