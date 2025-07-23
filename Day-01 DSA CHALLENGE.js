

//DAY 1 CHALLENGE 

//✂ 1.Remove Discontinued Products Problem:
//output: ['Laptop','Mobile','Watch'];
let products = ['Laptop','Mobile','Tablet','Camera','Watch']; 
products.splice(2,2);
 console.log(products); 

//➕ 2. Add New Students in Between Problem:
//output:  ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']
let students = ['Ali','Sara','Zoya'];
students.splice(1,0,'Nina','Omar');
 console.log(students); 

//🧪 3. Extract Top Performers
//Output: ['Zainab', 'Ali', 'Farhan']
let scores = ['Zainab','Ali','Farhan','Nida','Ayaan'];
const top = scores.splice(0,3);
 console.log(top); 

//📅 4. Show Last 2 Days’ Sales
// Output: [390, 310]
let sales = [220,300,280,150,400,390,310];
const last = sales.slice(-2);
 console.log(last); 

//🚿 5. Get All Users Who Are Active
// Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]
let users = [
    {name: 'Ahmed', active: true},
    {name: 'Mira', active: false},
    {name: 'John', active: true}
]
const result = users.filter((user)=> user.active === true);
 console.log(result); 

//📞 6. Block Short Phone Numbers
//Output: ['1234567890', '9876543210']
let phoneNumbers = ['1234567890','12345','9876543210','678901234'];
const valid = phoneNumbers.filter((number) => number.length >= 10);
 console.log(valid); 

//🧾 7. Convert Price to With Tax
// Output: [118, 236, 354]
let prices = [100,200,300];
const Tax = prices.map(price => price + (price*0.18)); 
 console.log(Tax); 

//💼 8. Append “.com” to Website Names
//Output: ['google.com', 'amazon.com', 'microsoft.com']
let sites = ['google','amazon','microsoft'];
const com = sites.map((site) =>  site + '.com');
 console.log(com);  

//📊 9. Calculate Total Cart Price
//Output: 2896
let cart = [499,1299,299,799];
const total = cart.reduce(function(acc,curr){
    return acc + curr;
},0);
 console.log(total); 

//10 - count frequency of votes problem:
//Output: { A: 3, B: 2, C: 1 }
let votes = ['A','B','A','C','B','A'];
const numbersOf = votes.reduce(function(acc,curr){
    if(acc[curr]){
        acc[curr]===++acc[curr];
    }else{
        acc[curr] = 1
    }
    return acc;
},{});
 console.log(numbersOf); 
