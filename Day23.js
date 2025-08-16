//Day 23 DSA challenge 

// 💼 Problem: Minimum Window of Required Ingredients

// Scenario:
// You’re working on an inventory management system for a restaurant. The chef gives you a list of required ingredients for a dish, and you have a list of ingredients available over several deliveries in sequence.

// You need to figure out the shortest continuous sequence of deliveries that contains all the required ingredients at least once.

function findDelivers(arr){
    let minLength=Infinity;
    let left=0;
    let tomatoCount=0, cheeseCount=0, onionCount=0;
    for(let right=0; right<arr.length; right++){
      if(arr[right]==="tomato") tomatoCount++;
      if(arr[right]==="cheese") cheeseCount++;
      if(arr[right]==="onion") onionCount++;


      while(tomatoCount>=1 && cheeseCount>=1 && onionCount>=1){
            minLength = Math.min(minLength, right - left + 1);

          if(arr[left]==="tomato")tomatoCount--;
          if(arr[left]==="cheese")cheeseCount--;
          if(arr[left]==="onion")onionCount--;
          left++;
      }
    }
    return minLength === Infinity ? -1 : minLength;
}
console.log(findDelivers( ["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]));