

//Day 65  DSA  CHALLENGE 



function checkingTarget(A,target){
  
  let currentSum = 0;
  let seenSums = new Set();   //We don’t need to store all prefix sums in an array.
                              //We can use a Set (like a bag) to keep track of sums we’ve already seen.


  for(let num of A){
      currentSum += num;

      if(currentSum === target ) return true;

      if(seenSums.has(currentSum - target)) return true;

      seenSums.add(currentSum);
  }

  return false ;


}

console.log(checkingTarget([1,4,20,3,10,5],33));