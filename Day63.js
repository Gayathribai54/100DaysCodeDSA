

//Day 63 challenge 


//Hashing means storing data in a way that allows very fast searching, 
// counting, or comparing using keys.

function checkEquality(A,B){
    if(A.length !== B.length) return "no";

    const freq={};  //to store values as key value pairs this is  hasp map
    

     for(let num of A){
        freq[num] = (freq[num] || 0) + 1;
     }


     for(let num of B){
        if(!freq[num]){
            return "no";  //num not found or already used up
        }
        freq[num]--;      //reduce count
     }

     return "yes"
}



console.log(checkEquality([1, 2, 5, 4, 0], [2, 4, 5, 0, 1])); 
console.log(checkEquality([1, 2, 5], [2, 4, 15]));    

//output
//yes
//no

//time complexity O(N);