
//Day 64 DSA CHALLENGE 

function toCheckRepetation(A){
     
    const freq={}

    for(let num of A){
        freq[num] = (freq[num] || 0) +1;
    }


    for(let num of A){
        if(freq[num]===1){
            return num;  
        }
    }

    return -1;

}

console.log(toCheckRepetation([9,4,9,6,7,4]));
console.log(toCheckRepetation([1,2,3,2,1,3]));