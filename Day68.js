

//Day 68 DSA CHALLENGE 


function sumOfDigits(N){
       if(N===0){
         return 0
       }
       const lastDigit = N%10;
       const remainingNumber = Math.floor(N/10);
       return lastDigit+sumOfDigits(remainingNumber)
}

console.log(sumOfDigits(1234));