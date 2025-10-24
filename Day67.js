

//Day 67 DSA CHALLENGE 

// USING Recursion to print numner upto N

function toPrintNumbers(N){

  if(N>5){
    return N;
  }
  console.log(N);
toPrintNumbers(N+1);

}

toPrintNumbers(1)