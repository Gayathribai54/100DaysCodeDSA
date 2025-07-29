//DAY 7 CHALLENGE 
// 🔹 1. Insert New Delivery Order
// 📦 Problem:
// You are managing a food delivery dashboard. 
// Orders are stored in an array sorted by delivery time. 
// A new order comes in, 
// and you need to insert it in the correct position to keep the array sorted by delivery time.

// 📝 Input: An array of objects like
// let arr=[
//   { orderId: 1, deliveryTime: "12:00" },
//   { orderId: 2, deliveryTime: "12:30" }
// ];
// newOrder = { orderId: 3, deliveryTime: "12:15" };


// for (let i = 0; i < arr.length; i++) {
//   if (newOrder.deliveryTime < arr[i].deliveryTime) {
//     arr.splice(i, 0, newOrder)
//   }
// }
// console.log(arr);


//hey the time complexity is O(n);
//i used only one loop to do task by using splice arr method;



// 🔹 2. Remove Inactive Users 
// 👥 Problem:
// You are building a social media cleanup tool.
//  Given an array of user accounts with an isActive boolean flag,
//  remove all users who are inactive.
// 📝 Input:

// let users=[
//   { username: "ali", isActive: true },
//   { username: "sara", isActive: false },
//   { username: "john", isActive: true }
// ]

// 🧩 Task: Return a new array without the inactive users.

// let activeUsers=[];
// for(i=0;i<users.length;i++){
//      if(users[i].isActive===true){
//         activeUsers.push(users[i]);
//      }
// }
// console.log(activeUsers);

// Time Complexity: O(n) — because you scan each user once.
// Space Complexity: O(n) — because you may store up to n users in the new array.



// 🔹 3. Movie Pair Watch Time 
// 🎬 Problem:
// You and your friend have exactly targetTime minutes to watch two movies. You're given an array of movie durations. 
// Find if there are two different movies you can watch back-to-back within the exact targetTime.

// 📝 Input:

// arr = [90, 85, 75, 60, 120, 150, 125];  
// target = 250;

function hasPairWithSum(arr, target) {
  arr.sort((a, b) => a - b); // ensure sorted
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]]; // Found valid pair
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false; // No such pair
}


console.log(hasPairWithSum([90, 85, 75, 60, 120, 150, 125],250));


//hey i have used two pointer traverse it help us to decrease loops 
//and i also sorted my array because only on sorted array we can perform
//two pointer traverse