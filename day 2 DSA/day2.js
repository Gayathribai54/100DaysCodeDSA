
///DAY 2 CHALLENGE 😍

//🧾 1. Generate Invoice Report 
//PROBLEM:
// You're building an invoice generator. 
// For each item, calculate total = qty * price. 
// let items = [
//   { name: "Pen", qty: 3, price: 10 },
//   { name: "Notebook", qty: 2, price: 50 },
//   { name: "Bag", qty: 1, price: 400 }
// ];
// let invoice = items.map(item => ({
//   name: item.name,
//   total: item.qty * item.price
// })
// );
// console.log(invoice);

// i used map method and higher order function.
//  inside with call back value which points element in array.
// i created new object which have elements of old array and new element



//problem 2:
//🧠 4. Detect Duplicate Entries 
//You’re validating a user list. 
// Some users are accidentally added more than once. 
// Extract the duplicate names only.
// let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
//  const repeat=users.filter((name,index,arr)=>{
//     return arr.indexOf(name)!=arr.lastIndexOf(name)&& arr.indexOf(name)===index;
// })
// console.log(repeat);

//
//
//



//problem 3
//📈 3. Find Most Sold Product
//You're analyzing orders. 
//Find the product with the highest quantity sold.
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];


let freqMap=orders.reduce((acc,order)=>{
    if(!acc[order.product]){
        acc[order.product]=0;
    }
    acc[order.product]+=order.qty;
    return acc;
},{})
let arr=Object.entries(freqMap);
let maxProduct=arr.reduce((acc,curr)=>{
    if(curr[1]>acc[1]){
        return curr;
    }
    return acc;
},arr[0]);
console.log(maxProduct[0]);