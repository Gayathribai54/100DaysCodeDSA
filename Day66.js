

//Day 66 DSA CHALLENGE 


//TO FIND LONGEST CONSECUTIVE SEQUENCE 
//MEANS NUMBERS THAT COME ONE AFTER ANOTHER 





function  longestConsecutive(number){

  if(number.length===0) return 0;

  const set = new Set(number);
  let longest = 0;

  for(let num of number){
    if(!set.has(num-1)){
        let currentNum = num;
        let currentStreak = 1;


        while(set.has(currentNum+1)){
            currentNum++;
            currentStreak++;
        }

        longest = Math.max(longest,currentStreak);
    }
  }

  return longest;

}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));