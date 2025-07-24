
//DAY 3 CHALLENGE  🧠 1. Detect and Merge Duplicate Product Entries (Advanced Cleanup)
// Problem:
// You are building a cleanup function for an inventory system.
//  Due to a bug in the backend, some products are listed multiple times with different IDs but the same name (case-insensitive). and 
// retain only the first occurrence of each product (case-insensitive match), while preserving the original order.
let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];
const valid = inventory.filter((item, index, arr) => {
  // Convert current item name to lowercase
  let lowercaseName = item.name.toLowerCase();

  // Check if this is the first occurrence (by index) of this lowercase name
  return arr.findIndex(obj => obj.name.toLowerCase() === lowercaseName) === index;
});

console.log(valid);

// i used filter method in that i created a variable which converts all the name in obj into string
// and return the arr which finds lowercase values are repeated 
//arr.findIndex(...) searches the array for the first occurrence (index) of a product name (case-insensitive).



//problem 2 🧠 2. Group Transactions by Category and Sum Amounts
// Problem:
// You are analyzing monthly expenses and 
// need to group all transactions by category and sum up the total amount spent in each category.
let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];
const monthly=transactions.reduce((acc,curr)=>{
     if (acc[curr.category]) {
    acc[curr.category] += curr.amount;
  } else {
    acc[curr.category] = curr.amount;
  }
  return acc;
},{})
console.log(monthly);

//i used reduce method to check the current values and to sum the amount reduce 
//into object has key and value 