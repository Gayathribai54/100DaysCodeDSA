// DAY 4 CHALLENGE 

// Problem:
// You’re working on an invoice management system. 
// You have a list of invoice numbers and you need to format them by adding a prefix "INV-" to each.

let invoices = [1001, 1002, 1003, 1004];
const add= invoices.map((value)=>{
        return 'INV-'+value;
})
console.log(add);